import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'
import { message } from 'antd'

console.log({ baseUrl })

// const user = {
// 	update: '​/user/update'
// }

export const userUpdate = (data: UserUpdateDto) => {
	return http
		.patch(`http://101.132.79.152/api/v1/user/update`, data)
		.then((res) => {
			// message.warning('保存成功')
			console.log('uuu-suc', res)
			return res.data.data
		})
		.catch((res) => {
			console.log('uuu-err', res.data.data)
			message.warning('保存失败，请稍后重试')
			return res.data.data
		})
}
