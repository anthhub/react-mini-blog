import http from './request'
import { baseUrl } from './url'

const follow = {
  add: `/follow/`,
  delete: `/follow/`,
}

export const addFollow = (id: string) => {
  return http.put(baseUrl + follow.add + id).then(res => {
    return res
  })
}

export const deleteFollow = (id: string) => {
  return http.delete(baseUrl + follow.delete + id).then(res => {
    return res
  })
}
