import { SignInDto } from '@/modal/dtos/signIn.dto'
import { SignUpDto } from '@/modal/dtos/signUp.dto'
import axios from 'axios'
import { baseUrl } from './url'

console.log({ baseUrl })

const account = {
  signUp: `​/signUp`,
  signIn: `/signIn`,
}

export const signUp = (data: SignUpDto) => {
  return axios.post(baseUrl + '/signUp', data).then(res => {
    return res.data.data
  })
}

export const signIn = (data: SignInDto) => {
  return axios.post(baseUrl + account.signIn, data).then(res => {
    return res.data.data
  })
}
