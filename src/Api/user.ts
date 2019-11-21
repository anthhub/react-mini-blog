import { UserUpdateDto } from '@/modal/dtos/userUpdate.dto'

import http from './request'
import { baseUrl } from './url'

console.log({ baseUrl })

// const user = {
// 	update: '​/user/update'
// }

export const userUpdate = (data: UserUpdateDto) => {
  return http
    .patch(`http://101.132.79.152/api/v1/user/update`, data)
    .then(res => {
      console.log('保存成功')
      return res.data.data
    })
    .catch(() => console.log('保存失败，请重试'))
}
