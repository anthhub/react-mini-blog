import http from './request'
import { baseUrl } from './url'

// console.log({ baseUrl })
const file = {
  update: `/file/upload`,
}
// 注意：不要直接从 Swagger 复制 url，会包含特殊字符
export const uploadFile = (formData: any) => {
  return http.post(baseUrl + file.update, formData).then(res => {
    // console.log(res, '文件上传成功')
    return res
  })
}
