import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { addFollow, deleteFollow } from '@/Api/follow'
import { getUserFollowers, getUserFollowing, getUserInfo } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import useToggle from '@/lib/hooks/useToggle'
import { useDispatch, useIsLogin, useSelector } from '@/redux/context'

import { Wrapper } from './style'

const ListBodyFollow: React.FC = () => {
  const { id = '', item = '' } = useParams()

  // 拿到当前登录用户的 id
  const {
    user: { id: loginId },
  } = useSelector()

  const dispatch = useDispatch()
  // // 根据 id 该用户关注和被关注的用户列表
  useFetch(async () => {
    const rs = await getUserFollowing(id)
    const list = (rs && rs.edges) || []
    dispatch({
      type: 'CHANG_FOLLOWING_LIST',
      payload: { followingList: [...list] },
    })
    return list
  }, [])

  useFetch(async () => {
    const rs = await getUserFollowers(id)
    const list = (rs && rs.edges) || []
    dispatch({
      type: 'CHANGE_FOLLOWERS_LIST',
      payload: { followersList: [...list] },
    })
    return list
  }, [])

  const { followingList = [], followersList = [] } = useSelector()

  const onFollow = useCallback(
    async (followingId, isFollowing, type) => {
      if (!followingId || !loginId) {
        return
      }
      isFollowing ? await deleteFollow(followingId) : await addFollow(followingId)

      const userInfo = await getUserInfo(id)
      dispatch({
        type: 'UPDATE_CHECK_USER',
        payload: { checkUser: userInfo },
      })

      if (type === 'follower') {
        dispatch({
          type: 'CHANGE_FOLLOWERS_LIST',
          payload: {
            followersList: followersList.map(item => {
              item.follower.isFollowing = !isFollowing
              return item
            }),
          },
        })
      }

      if (type === 'following') {
        dispatch({
          type: 'CHANG_FOLLOWING_LIST',
          payload: {
            followingList: followingList.map(item => {
              item.following.isFollowing = !isFollowing
              return item
            }),
          },
        })
      }
    },
    [loginId, followersList, followingList]
  )

  return (
    <Wrapper>
      <ul className="list-group">
        {item === 'followers'
          ? followersList.map((item: any) => (
              <li className="list-item" key={item.id}>
                <Link to={'/user/' + item.follower.id} target="_blank" className="user-link">
                  <div
                    className="avatar"
                    style={{
                      background: `#eee url(${item.follower.avatarLarge}) no-repeat center/cover`,
                    }}
                  />
                  <div className="info-box">
                    <div className="username">{item.follower.username}</div>

                    {item.follower.jobTitle && item.follower.company ? (
                      <div className="detail">{item.follower.jobTitle + ' @ ' + item.follower.company}</div>
                    ) : item.follower.jobTitle ? (
                      <div className="detail">{item.follower.jobTitle}</div>
                    ) : item.follower.company ? (
                      <div className="detail">{item.follower.company}</div>
                    ) : null}
                  </div>

                  {item.follower.isFollowing ? (
                    <button
                      type="button"
                      className="follow-btn followed"
                      onClick={e => {
                        e.stopPropagation()
                        onFollow(item.follower.id, item.follower.isFollowing, 'follower')
                      }}
                    >
                      已关注
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="follow-btn"
                      onClick={e => {
                        e.stopPropagation()
                        e.preventDefault()
                        onFollow(item.follower.id, item.follower.isFollowing, 'follower')
                      }}
                    >
                      关注
                    </button>
                  )}
                </Link>
              </li>
            ))
          : followingList.map((item: any) => (
              <li className="list-item" key={item.id}>
                <Link to={'/user/' + item.following.id} target="_blank" className="user-link">
                  <div
                    className="avatar"
                    style={{
                      background: `#eee url(${item.following.avatarLarge}) no-repeat center/cover`,
                    }}
                  />
                  <div className="info-box">
                    <div className="username">{item.following.username}</div>

                    {item.following.jobTitle && item.following.company ? (
                      <div className="detail">{item.following.jobTitle + ' @ ' + item.following.company}</div>
                    ) : item.following.jobTitle ? (
                      <div className="detail">{item.following.jobTitle}</div>
                    ) : item.following.company ? (
                      <div className="detail">{item.following.company}</div>
                    ) : null}
                  </div>

                  {item.following.isFollowing ? (
                    <button
                      type="button"
                      className="follow-btn followed"
                      onClick={e => {
                        e.stopPropagation()
                        e.preventDefault()
                        onFollow(item.following.id, item.following.isFollowing, 'following')
                      }}
                    >
                      已关注
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="follow-btn"
                      onClick={e => {
                        e.stopPropagation()
                        e.preventDefault()
                        onFollow(item.following.id, item.following.isFollowing, 'following')
                      }}
                    >
                      关注
                    </button>
                  )}
                </Link>
              </li>
            ))}
      </ul>
    </Wrapper>
  )
}

export default ListBodyFollow
