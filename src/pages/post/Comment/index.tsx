import React, { useCallback, useState } from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'
import { useIsLogin, useSelector } from '@/redux/context'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

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
	id,
	viewCount,
	user: { avatarLarge = '', id: userId, username: author } = {}
}) => {
	console.log(author, '333')
	// console.log('/editor/' + id, { content }, '333')

	const isLogin = useIsLogin()
	// 登录用户的用户名
	const { user: { username } } = useSelector()
	const history = useHistory()
	const onReedit = useCallback(
		async () => {
			history.push('/editor/' + id)
		},
		[ id ]
	)
	const isFollow = true

	const [ focusFlag, setFocusFlag ] = useState(false)
	return (
		<Wrapper>
			<div className="title">评论</div>
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
					/>
					<div className="action-box">
						<div className="submit">
							<span className="">Ctrl or ⌘ + Enter</span>
							<button className="submit-btn">评论</button>
						</div>
					</div>
				</div>
			</div>

			<div className="comment-list">
				<div className="item">
					<div className="first-comment">
						<div className="avatar" />
						<div className="content-box">
							<Link to="" className="username">
								xiaohuang
							</Link>
							<div className="content">楼主，能否说下，这个头条给你发offer，薪资定的是多少？</div>
							<div className="">1</div>
							<div className="reply-stat">
								<time className="">1小时前</time>
								<div className="delete">删除</div>
								<div className="action-box">
									<div className="like-action">赞</div>
									<div className="comment-like">评</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="more-comment">查看更多 ></div>
		</Wrapper>
	)
}

export default Comment
