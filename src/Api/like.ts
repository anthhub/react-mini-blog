import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'

// console.log({ baseUrl })

// 赞某篇文章
export const addLike = (articleId: string) => {
  return http.put(baseUrl + '/like/' + articleId).then(res => {
    // console.log('addLike', res)
    return res
  })
}

export const deleteLike = (articleId: string) => {
  return http.delete(baseUrl + '/like/' + articleId).then(res => {
    // console.log('addLike', res)
    return res
  })
}
