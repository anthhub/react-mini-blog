import { SignInDto } from '@/modal/dtos/signIn.dto'
import { SignUpDto } from '@/modal/dtos/signUp.dto'

import { baseUrl } from './url'
import http from './request'

console.log({ baseUrl })

const account = {
	signUp: `​/signUp`,
	signIn: `/signIn`
}

export const signUp = (data: SignUpDto) => {
	return http.post(`http://101.132.79.152/api/v1/signUp`, data).then((res) => {
		return res.data.data
	})
}

export const signIn = (data: SignInDto) => {
	return http.post(`http://101.132.79.152/api/v1/signIn`, data).then((res) => {
		return res.data.data
	})
}
