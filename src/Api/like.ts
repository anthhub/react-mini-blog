import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'

// console.log({ baseUrl })

// 赞某篇文章
export const addLike = (articleId: string) => {
	return http
		.put(baseUrl + '/like/' + articleId)
		.then((res) => {
			// console.log('addLike', res.data.data)
			return res.data.data
		})
		.catch((res) => {
			return res.data.data
		})
}

// export const getArticleLikeCount = (articleId: string) => {
// 	return http
// 		.get(baseUrl + '/like/' + articleId)
// 		.then((res) => {
// 			// console.log('addLike', res.data.data)
// 			return res.data.data
// 		})
// 		.catch((res) => {
// 			return res.data.data
// 		})
// }
