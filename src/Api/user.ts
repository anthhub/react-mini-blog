import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'

const user = {
  update: '/user/update',
  info: '/user/',
  // article: '/user/${id}/article'
}

export const userUpdate = (data: UserUpdateDto) => {
  return http.patch(baseUrl + user.update, data).then(res => {
    return res
  })
}

// 拿到当前登录用户的信息
export const getUserInfo = (id: string) => {
  return http.get(baseUrl + user.info + id + '/info').then(res => {
    return res
  })
}

// 拿到指定 id 的用户的文章
export const getUserArticles = (data?: any) => {
  return http.get(baseUrl + '/user/' + (data.id || data) + '/articles', data || {}).then(res => {
    return res
  })
}

// 拿到指定 id 的用户的关注
export const getUserFollowing = (id: string) => {
  return http.get(baseUrl + '/user/' + id + '/following').then(res => {
    return res
  })
}

export const getUserFollowers = (id: string) => {
  return http.get(baseUrl + '/user/' + id + '/followers').then(res => {
    return res
  })
}

// id 是查看用户, followerId是登录用户
export const isFollowing = (id: string, followerId: string) => {
  return http.get(baseUrl + '/user/' + id + '/isFollowing/' + followerId).then(res => {
    return res
  })
}

// 拿到指定 id 的用户的赞
export const getUserLikes = (id: string) => {
  return http.get(baseUrl + '/user/' + id + '/likes').then(res => {
    return res
  })
}
