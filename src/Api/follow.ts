import http from './request'
import { baseUrl } from './url'

const follow = {
	add: `/follow/`,
	delete: `/follow/`
}

export const addFollow = (id: string) => {
	return http
		.put(baseUrl + follow.add + id)
		.then((res) => {
			return res.data.data
		})
		.catch((res) => {
			// return res.data.data
		})
}

export const deleteFollow = (id: string) => {
	return http
		.put(baseUrl + follow.delete + id)
		.then((res) => {
			return res.data.data
		})
		.catch((res) => {
			// return res.data.data
		})
}
