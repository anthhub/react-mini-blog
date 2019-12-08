import React, { useCallback, useEffect, useState, useRef } from 'react'
import { useHistory, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

import { createComment, getCommentList } from '@/Api/comment'
import useFetch from '@/lib/hooks/useFetch'
import useInputEvent from '@/lib/hooks/useInputEvent'
import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useSelector } from '@/redux/context'

import { Wrapper } from './style'

const data = [
  {
    topComment: [
      {
        topComment: [],
        _id: '5deb653553af50434e4d1c20',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '4444444',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64e953af50434e4d1c1a',
        create_at: 1575707957513,
        update_at: 1575707957513,
        id: '5deb653553af50434e4d1c20',
      },
      {
        topComment: [],
        _id: '5deb653453af50434e4d1c1f',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '4444444',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64e953af50434e4d1c1a',
        create_at: 1575707956872,
        update_at: 1575707956872,
        id: '5deb653453af50434e4d1c1f',
      },
      {
        topComment: [],
        _id: '5deb652653af50434e4d1c1e',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '33333',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64e953af50434e4d1c1a',
        create_at: 1575707942633,
        update_at: 1575707942633,
        id: '5deb652653af50434e4d1c1e',
      },
      {
        topComment: [],
        _id: '5deb652653af50434e4d1c1d',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '33333',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64e953af50434e4d1c1a',
        create_at: 1575707942072,
        update_at: 1575707942072,
        id: '5deb652653af50434e4d1c1d',
      },
      {
        topComment: [],
        _id: '5deb64f853af50434e4d1c1c',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '33333',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64a353af50434e4d1c19',
        create_at: 1575707896325,
        update_at: 1575707896325,
        id: '5deb64f853af50434e4d1c1c',
      },
      {
        topComment: [],
        _id: '5deb64ee53af50434e4d1c1b',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '111111111111111',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64a353af50434e4d1c19',
        create_at: 1575707886226,
        update_at: 1575707886226,
        id: '5deb64ee53af50434e4d1c1b',
      },
      {
        topComment: [],
        _id: '5deb64e953af50434e4d1c1a',
        article: '5dea7b52723edc0af9871041',
        user: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        content: '111111111111111',
        respUser: {
          isFollowing: false,
          _id: '5de61558e6016b53a05ed220',
          mobilePhoneNumber: '18621669600',
          username: '18621669600',
          create_at: 1575359832077,
          update_at: 1575359832077,
          id: '5de61558e6016b53a05ed220',
          avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
        },
        respComment: '5deb64a353af50434e4d1c19',
        create_at: 1575707881711,
        update_at: 1575707881711,
        id: '5deb64e953af50434e4d1c1a',
      },
    ],
    _id: '5deb64a353af50434e4d1c19',
    article: '5dea7b52723edc0af9871041',
    user: {
      isFollowing: false,
      _id: '5de61558e6016b53a05ed220',
      mobilePhoneNumber: '18621669600',
      username: '18621669600',
      create_at: 1575359832077,
      update_at: 1575359832077,
      id: '5de61558e6016b53a05ed220',
      avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
    },
    content: '22222',
    respUser: {
      isFollowing: false,
      _id: '5de61558e6016b53a05ed220',
      mobilePhoneNumber: '18621669600',
      username: '18621669600',
      create_at: 1575359832077,
      update_at: 1575359832077,
      id: '5de61558e6016b53a05ed220',
      avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
    },
    create_at: 1575707811052,
    update_at: 1575707811052,
    id: '5deb64a353af50434e4d1c19',
  },
  {
    topComment: [],
    _id: '5deb649253af50434e4d1c18',
    article: '5dea7b52723edc0af9871041',
    user: {
      isFollowing: false,
      _id: '5de61558e6016b53a05ed220',
      mobilePhoneNumber: '18621669600',
      username: '18621669600',
      create_at: 1575359832077,
      update_at: 1575359832077,
      id: '5de61558e6016b53a05ed220',
      avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
    },
    content: '111111111111111',
    respUser: {
      isFollowing: false,
      _id: '5de61558e6016b53a05ed220',
      mobilePhoneNumber: '18621669600',
      username: '18621669600',
      create_at: 1575359832077,
      update_at: 1575359832077,
      id: '5de61558e6016b53a05ed220',
      avatarLarge: 'http://101.132.79.152/image-1575645650324.jpeg',
    },
    create_at: 1575707794590,
    update_at: 1575707794590,
    id: '5deb649253af50434e4d1c18',
  },
]

type TData = typeof data

// 格式化时间
export const formatDate = (time: number) => {
  const dt = new Date()
  const ms = dt.getTime()
  // console.log(ms)
  const diff = ms - time
  // 1年的毫秒数：31536000000
  if (diff >= 31536000000) {
    return Math.floor(diff / 31536000000) + '年前'
  } else if (diff >= 2592000000 && diff < 31536000000) {
    return Math.floor(diff / 2592000000) + '月前'
  } else if (diff >= 86400000 && diff < 2592000000) {
    return Math.floor(diff / 86400000) + '天前'
  } else if (diff >= 3600000 && diff < 86400000) {
    return Math.floor(diff / 3600000) + '小时前'
  } else if (diff >= 60000 && diff < 3600000) {
    return Math.floor(diff / 60000) + '分钟前'
  } else {
    return '刚刚'
  }
}

interface IProps extends ArticleEntity {
  // user: { avatarLarge: string }
}

const Comment: React.FC<IProps> = ({ create_at, content, title, html, screenshot, id: articleId, viewCount, user: { avatarLarge = '', id: userId, username: author } = {} }) => {
  const isLogin = useIsLogin()
  // 登录用户的用户名
  const {
    user: { username, id: loginId, avatarLarge: loginAvatarLarge },
  } = useSelector()

  const [focusFlag, setFocusFlag] = useState(false)
  const [focusFlag1, setFocusFlag1] = useState(false)
  const [focusFlag2, setFocusFlag2] = useState(false)

  const { value: comment, onInputEvent, setValue: setComment } = useInputEvent('')
  const { value: comment1, onInputEvent: onInputEvent1, setValue: setComment1 } = useInputEvent('')
  const { value: comment2, onInputEvent: onInputEvent2, setValue: setComment2 } = useInputEvent('')

  // 是否显示一级回复框
  const [replyBox1, setReplyBox1] = useState('')

  // 是否显示二级回复框
  const [replyBox2, setReplyBox2] = useState('')

  const hideReplyBox1 = useCallback(
    (e: any) => {
      if (
        // 点击下列区域以外区域 或 面板打开时点击了这 3 个地方 会收起面板
        (!replyBox1 && !['form-box', 'input-comment focused', 'action-box', 'hint', 'submit', 'submit-btn'].includes(e.target.className)) ||
        (replyBox1 && ['action-title'].includes(e.target.className))
      ) {
        // console.log('隐藏 publish 面板', { showPublish })
        setReplyBox1('')
      }
    },
    [replyBox1]
  )

  useEffect(() => {
    document.addEventListener('click', hideReplyBox1)
    return () => document.removeEventListener('click', hideReplyBox1)
  }, [])

  const hideReplyBox2 = useCallback(
    (e: any) => {
      if (
        // 点击下列区域以外区域 或 面板打开时点击了这 3 个地方 会收起面板
        (!replyBox2 && !['form-box', 'input-comment focused', 'action-box', 'hint', 'submit', 'submit-btn'].includes(e.target.className)) ||
        (replyBox2 && ['action-title'].includes(e.target.className))
      ) {
        // console.log('隐藏 publish 面板', { showPublish })
        setReplyBox2('')
      }
    },
    [replyBox2]
  )

  useEffect(() => {
    document.addEventListener('click', hideReplyBox2)
    return () => document.removeEventListener('click', hideReplyBox2)
  }, [])

  // 拿到文章评论
  const { data: commentList1 = [], doFetch } = useFetch(() => getCommentList(articleId), [articleId])
  const commentList: TData = commentList1
  console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: comment', commentList)

  // 发布评论
  const onComment = useCallback(async () => {
    await createComment({
      respUser: userId,
      articleId,
      content: comment,
    })
    setComment('')
    doFetch()
  }, [userId, articleId, comment])

  // 回复一级评论
  const onReply1 = useCallback(
    async (firstComment, respComment, respUser) => {
      await createComment({
        firstComment,
        respComment,
        respUser,
        articleId,
        content: comment1,
      })
      setComment1('')
      setReplyBox1('')
      doFetch()
    },
    [userId, articleId, comment1]
  )

  // 回复二级评论
  const onReply2 = useCallback(
    async (firstComment, respComment, respUser) => {
      await createComment({
        firstComment,
        respComment,
        respUser,
        articleId,
        content: comment2,
      })
      setComment2('')
      setReplyBox2('')
      doFetch()
    },
    [userId, articleId, comment2]
  )

  const commentRef = useRef<HTMLDivElement>(null)

  const { hash } = useLocation()

  if (hash && hash.length > 1 && commentRef && commentRef.current) {
    commentRef.current.scrollIntoView()
  }

  return (
    <Wrapper>
      <div className="gap" id="comment" ref={commentRef}></div>
      <div className="title">评论</div>
      <div className="comment-form">
        {/* <div className="avatar" style={{ background: `#eee url(${loginAvatarLarge}) no-repeat center/cover` }} /> */}
        <Link to={`/user/${loginId}`} className="avatar-link" target="_blank">
          <div className="avatar" style={{ background: `#eee url(${loginAvatarLarge}) no-repeat center/cover` }} />
        </Link>
        <div className="form-box">
          <input
            placeholder={'输入评论...'}
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

      {commentList.map(item => (
        <ul className="comment-list" key={item.id}>
          <li className="item">
            {/* 一级评论 */}
            <div className="first-comment">
              <Link to={`/user/${item.user.id}`} className="avatar-link" target="_blank">
                <div className="avatar" style={{ background: `#eee url(${item.user.avatarLarge}) no-repeat center/cover` }} />
              </Link>
              <div className="content-box">
                <Link to={`/user/${item.user.id}`} className="username" target="_blank">
                  {item.user.username}
                </Link>
                <div className="content">{item.content}</div>
                <div className="reply-stat">
                  <time className="time">{formatDate(item.update_at)}</time>
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
                        onClick={e => {
                          e.nativeEvent.stopImmediatePropagation()
                          setReplyBox1(item.id)
                        }}
                      >
                        回复
                      </span>
                    </div>
                  </div>
                </div>

                {/* 回复一级评论 */}
                {replyBox1 === item.id && (
                  <div className="form-box">
                    <input
                      placeholder={`回复${item.user.username}`}
                      className={replyBox1 === item.id ? 'input-comment focused' : 'input-comment'}
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
                        <button className="submit-btn" disabled={comment1 ? false : true} onClick={() => onReply1(item.id, item.id, item.user.id)}>
                          评论
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 二级评论区 */}
                {item.topComment.map(item2 => (
                  <ul className="sub-comment-list" key={item2.id}>
                    <li className="item">
                      <div className="sub-comment">
                        <Link to={`/user/${item2.user.id}`} className="avatar-link" target="_blank">
                          <div className="avatar" style={{ background: `#eee url(${item2.user.avatarLarge}) no-repeat center/cover` }} />
                        </Link>
                        <div className="content-box">
                          <Link to={`/user/${item2.user.id}`} className="username" target="_blank">
                            {item2.user.username}
                          </Link>
                          <div className="content">
                            {item2.respComment !== item.id && (
                              <span>
                                <span className="">回复</span>
                                <Link to={`/user/${item2.respUser.id}`} className="username-replied" target="_blank">
                                  {item2.respUser.username}
                                </Link>
                                <span className="">: </span>
                              </span>
                            )}

                            <span className="sub-content">{item2.content}</span>
                          </div>
                          <div className="reply-stat">
                            <time className="time">{formatDate(item2.update_at)}</time>
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
                                  onClick={e => {
                                    e.nativeEvent.stopImmediatePropagation()
                                    setReplyBox2(item2.id)
                                  }}
                                >
                                  回复
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* 回复二级评论 */}
                          {replyBox2 === item2.id && (
                            <div className="form-box">
                              <input
                                placeholder={`回复${item2.user.username}`}
                                className={replyBox2 === item2.id ? 'input-comment focused' : 'input-comment'}
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
                                  <button className="submit-btn" disabled={comment2 ? false : true} onClick={() => onReply2(item.id, item2.id, item2.user.id)}>
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
                ))}
              </div>
            </div>
          </li>
        </ul>
      ))}

      <div className="more-comment">{/* 查看更多 > */}</div>
    </Wrapper>
  )
}

export default Comment
