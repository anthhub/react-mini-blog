import { SignInDto } from '@/modal/dtos/signIn.dto'
import { SignUpDto } from '@/modal/dtos/signUp.dto'

import { baseUrl } from './url'
import http from './request'

// console.log({ baseUrl })

// const account = {
// 	signUp: `​/signUp`,
// 	signIn: `/signIn`
// }

export const signUp = (data: SignUpDto) => {
  return http.post(`${baseUrl}/signUp`, data).then(res => {
    return res
  })
}

export const signIn = (data: SignInDto) => {
  return http.post(`${baseUrl}/signIn`, data).then(res => {
    return res
  })
}
