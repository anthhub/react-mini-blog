import axios from 'axios'
import { AccountDto } from '@/modal/dtos/account.dto'

const baseUrl = 'http://101.132.79.152/api/v1'

console.log({ baseUrl })

const account = {
	signUp: `​/signUp`,
	signIn: `/signIn`
}

export const signUp = (data: { phoneNumber: number; password: any }) => {
	return axios.post(baseUrl + account.signUp, data).then((res) => {
		return res.data.data
	})
}

export const signIn = (data: { phoneNumber: number; password: any }) => {
	return axios.post(baseUrl + account.signIn, data).then((res) => {
		return res.data.data
	})
}
