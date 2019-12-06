import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'

// console.log({ baseUrl })

// const calledWhenDiffParams = (fn: Function) => {
// 	let pre: any
// 	return (arg: any) => {
// 		if (arg === pre) {
// 			return
// 		}
// 		pre = arg
// 		return fn(arg)
// 	}
// }

const user = {
  update: '/user/update',
  info: '/user/',
  // article: '/user/${id}/article'
}

export const userUpdate = (data: UserUpdateDto) => {
  return http
    .patch(baseUrl + user.update, data)
    .then(res => {
      // message.warning('保存成功')
      // console.log('userUpdate==suc==', res)
      return res
    })
    .catch(res => {
      // message.warning('保存失败，请稍后重试')
      // console.log('==err==', res)
      return res
    })
}

// 拿到当前登录用户的信息
export const getUserInfo = (id: string) => {
  return http
    .get(baseUrl + user.info + id + '/info')
    .then(res => {
      // console.log('getUserInfo==suc==', res)
      return res
    })
    .catch(res => {
      // console.log('uuu-err', res)
      // message.warning('保存失败，请稍后重试')
      return res
    })
}

// 拿到指定 id 的用户的文章
export const getUserArticles = (data?: any) => {
  return http
    .get(baseUrl + '/user/' + (data.id || data) + '/articles', data || {})
    .then(res => {
      // console.log('getUserArticle==suc==', res)
      return res
    })
    .catch(res => {
      // console.log('uuu-err', res)
      // message.warning('保存失败，请稍后重试')
      return res
    })
}

// 拿到指定 id 的用户的关注
export const getUserFollowing = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/following')
    .then(res => {
      // console.log('following', res)
      return res
    })
    .catch(res => {
      return res
    })
}

export const getFollowingCount = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/following/count')
    .then(res => {
      console.log('followingCount', res)
      return res
    })
    .catch(res => {
      return res
    })
}

export const getUserFollowers = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/followers')
    .then(res => {
      // console.log('followers', res)
      return res
    })
    .catch(res => {
      return res
    })
}

export const getFollowersCount = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/followers/count')
    .then(res => {
      // console.log('followersCount', res)
      return res
    })
    .catch(res => {
      return res
    })
}

// 拿到指定 id 的用户的赞
export const getUserLikes = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/likes')
    .then(res => {
      console.log('following', res)
      return res
    })
    .catch(res => {
      return res
    })
}

export const getLikesCount = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/likes/count')
    .then(res => {
      // console.log('followersCount', res)
      return res
    })
    .catch(res => {
      return res
    })
}

export const getLikedCount = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/liked/count')
    .then(res => {
      // console.log('followersCount', res)
      return res
    })
    .catch(res => {
      return res
    })
}

// 拿到指定 id 的用户的文章被閲讀數
export const getViewCount = (id: string) => {
  return http
    .get(baseUrl + '/user/' + id + '/view/count')
    .then(res => {
      // console.log('followersCount', res)
      return res
    })
    .catch(res => {
      return res
    })
}
