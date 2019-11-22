import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'
import { message } from 'antd'

console.log({ baseUrl })

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
	info: '/user/info'
}

export const userUpdate = (data: UserUpdateDto) => {
	return http
		.patch(baseUrl + user.update, data)
		.then((res) => {
			// message.warning('保存成功')
			console.log('userUpdate==suc==', res)
			return res.data.data
		})
		.catch((res) => {
			// message.warning('保存失败，请稍后重试')
			console.log('==err==', res)
			return res.data.data
		})
}

export const getUserInfo = () => {
	return http
		.get(baseUrl + user.info)
		.then((res) => {
			console.log('getUserInfo==suc==', res)
			return res.data.data
		})
		.catch((res) => {
			// console.log('uuu-err', res.data.data)
			// message.warning('保存失败，请稍后重试')
			return res.data.data
		})
}
