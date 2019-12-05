import React, { useCallback, useState, useEffect } from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'
import { useIsLogin, useSelector } from '@/redux/context'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { createComment, getCommentList } from '@/Api/comment'
import useFetch from '@/lib/hooks/useFetch'

const formatDate = (milliseconds: number) => {
	const data = new Date(milliseconds)
	const year = data.getFullYear()
	const month = data.getMonth() + 1
	const day = data.getDate()
	return year + '年' + month + '月' + day + '日'
}

interface IProps extends ArticleEntity {
	// user: { avatarLarge: string }
}

const Comment: React.FC<IProps> = ({
	create_at,
	content,
	title,
	html,
	screenshot,
	id: articleId,
	viewCount,
	user: { avatarLarge = '', id: userId, username: author } = {}
}) => {
	console.log(author, '333')
	// console.log('/editor/' + id, { content }, '333')

	const isLogin = useIsLogin()
	// 登录用户的用户名
	const { user: { username } } = useSelector()
	const history = useHistory()

	const [ focusFlag, setFocusFlag ] = useState(false)
	const [ focusFlag1, setFocusFlag1 ] = useState(false)
	const [ focusFlag2, setFocusFlag2 ] = useState(false)

	const { value: comment, onInputEvent, setValue: setComment } = useInputEvent('')
	const { value: comment1, onInputEvent: onInputEvent1, setValue: setComment1 } = useInputEvent('')
	const { value: comment2, onInputEvent: onInputEvent2, setValue: setComment2 } = useInputEvent('')

	// 是否显示一级回复框
	const [ replyBox1, setReplyBox1 ] = useState(false)

	const hideReplyBox1 = useCallback(
		(e: any) => {
			if (
				// 点击下列区域以外区域 或 面板打开时点击了这 3 个地方 会收起面板
				(!replyBox1 &&
					![ 'form-box', 'input-comment focused', 'action-box', 'hint', 'submit', 'submit-btn' ].includes(
						e.target.className
					)) ||
				(replyBox1 && [ 'action-title' ].includes(e.target.className))
			) {
				// console.log('隐藏 publish 面板', { showPublish })
				setReplyBox1(false)
			}
		},
		[ replyBox1 ]
	)

	useEffect(() => {
		document.addEventListener('click', hideReplyBox1)
		return () => document.removeEventListener('click', hideReplyBox1)
	}, [])

	// 是否显示二级回复框

	const [ replyBox2, setReplyBox2 ] = useState(false)

	const hideReplyBox2 = useCallback(
		(e: any) => {
			if (
				// 点击下列区域以外区域 或 面板打开时点击了这 3 个地方 会收起面板
				(!replyBox2 &&
					![ 'form-box', 'input-comment focused', 'action-box', 'hint', 'submit', 'submit-btn' ].includes(
						e.target.className
					)) ||
				(replyBox2 && [ 'action-title' ].includes(e.target.className))
			) {
				// console.log('隐藏 publish 面板', { showPublish })
				setReplyBox2(false)
			}
		},
		[ replyBox2 ]
	)

	useEffect(() => {
		document.addEventListener('click', hideReplyBox2)
		return () => document.removeEventListener('click', hideReplyBox2)
	}, [])

	// 发布评论
	const onComment = useCallback(
		async () => {
			await createComment({
				respUser: userId,
				articleId: articleId,
				content: comment
			})
			setComment('')
		},
		[ userId, articleId, comment ]
	)

	// 回复一级评论
	const onReply1 = useCallback(
		async () => {
			await createComment({
				// firstComment:,
				// respComment:,
				respUser: '',
				articleId: articleId,
				content: comment1
			})
			setComment1('')
		},
		[ userId, articleId, comment1 ]
	)

	// 回复二级评论
	const onReply2 = useCallback(
		async () => {
			await createComment({
				// firstComment:,
				// respComment:,
				respUser: '',
				articleId: articleId,
				content: comment2
			})
			setComment2('')
		},
		[ userId, articleId, comment2 ]
	)

	// 拿到文章评论
	const { data = comment } = useFetch(() => getCommentList(articleId))


	return (
		<Wrapper>
			<div className="title" id="comment">
				评论
			</div>
			<div className="comment-form">
				<div className="avatar" />
				<div className="form-box">
					<input
						className={focusFlag ? 'input-comment focused' : 'input-comment'}
						onFocus={() => {
							setFocusFlag(true)
						}}
						onBlur={() => {
							setFocusFlag(false)
						}}
						value={comment}
						onChange={onInputEvent}
					/>
					<div className="action-box">
						<div className="submit">
							<span className="hint">Ctrl or ⌘ + Enter</span>
							<button className="submit-btn" disabled={comment ? false : true} onClick={onComment}>
								评论
							</button>
						</div>
					</div>
				</div>
			</div>

			<ul className="comment-list">
				<li className="item">
					{/* 一级评论 */}
					<div className="first-comment">
						<Link to="" className="avatar-link" target="_blank">
							<div className="avatar" />
						</Link>
						<div className="content-box">
							<Link to="" className="username" target="_blank">
								xiaohuang
							</Link>
							<div className="content">我是个虚假的前端，我枯了</div>
							<div className="reply-stat">
								<time className="time">1小时前</time>
								{/* <div className="delete">删除</div> */}
								<div className="action-box">
									{/* <div className="like-action action">
										<i className="like-icon" />
										<span className="action-title">赞</span>
									</div> */}
									<div className="comment-like action">
										<i className="comment-icon" />
										<span
											className="action-title"
											onClick={(e) => {
												e.nativeEvent.stopImmediatePropagation()
												setReplyBox1(true)
											}}
										>
											回复
										</span>
									</div>
								</div>
							</div>

							{/* 回复一级评论 */}
							{replyBox1 && (
								<div className="form-box">
									<input
										className={focusFlag1 ? 'input-comment focused' : 'input-comment'}
										onFocus={() => {
											setFocusFlag1(true)
										}}
										onBlur={() => {
											setFocusFlag1(false)
										}}
										value={comment1}
										onChange={onInputEvent1}
									/>
									<div className="action-box">
										<div className="submit">
											<span className="hint">Ctrl or ⌘ + Enter</span>
											<button
												className="submit-btn"
												disabled={comment1 ? false : true}
												onClick={onReply1}
											>
												评论
											</button>
										</div>
									</div>
								</div>
							)}

							{/* 二级评论区 */}
							<ul className="sub-comment-list">
								<li className="item">
									<div className="sub-comment">
										<Link to="" className="avatar-link" target="_blank">
											<div className="avatar" />
										</Link>
										<div className="content-box">
											<Link to="" className="username" target="_blank">
												sub
											</Link>
											<div className="content">
												<span className="">回复</span>
												<Link to="" className="username-replied" target="_blank">
													1
												</Link>
												<span className="">: </span>
												<span className="sub-content">gai你好你好你好你好你好你好你好你好你好</span>
											</div>
											<div className="reply-stat">
												<time className="time">1小时前</time>
												{/* <div className="delete">删除</div> */}
												<div className="action-box">
													{/* <div className="like-action action">
														<i className="like-icon" />
														<span className="action-title">赞</span>
													</div> */}
													<div className="comment-like action">
														<i className="comment-icon" />
														<span
															className="action-title"
															onClick={(e) => {
																e.nativeEvent.stopImmediatePropagation()
																setReplyBox2(true)
															}}
														>
															回复
														</span>
													</div>
												</div>
											</div>

											{/* 回复二级评论 */}
											{replyBox2 && (
												<div className="form-box">
													<input
														className={
															focusFlag2 ? 'input-comment focused' : 'input-comment'
														}
														onFocus={() => {
															setFocusFlag2(true)
														}}
														onBlur={() => {
															setFocusFlag2(false)
														}}
														value={comment2}
														onChange={onInputEvent2}
													/>
													<div className="action-box">
														<div className="submit">
															<span className="hint">Ctrl or ⌘ + Enter</span>
															<button
																className="submit-btn"
																disabled={comment2 ? false : true}
																onClick={onReply2}
															>
																评论
															</button>
														</div>
													</div>
												</div>
											)}
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>

			{/* <div className="more-comment">查看更多 ></div> */}
		</Wrapper>
	)
}

export default Comment
