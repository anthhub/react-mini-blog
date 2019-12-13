import { message } from 'antd'
import axios, { AxiosRequestConfig as _AxiosRequestConfig } from 'axios'
import * as qs from 'qs'

import { bridge } from '@/App'

export interface IAxiosRequestConfig extends _AxiosRequestConfig {
  startTime?: Date
}

export interface IHttpRequest {
  get(url: string, data?: any, baseUrl?: string): Promise<any>
  post(url: string, data?: any, baseUrl?: string): Promise<any>
  delete(url: string, data?: any, baseUrl?: string): Promise<any>
  put(url: string, data?: any, baseUrl?: string): Promise<any>
  patch(url: string, data?: any, baseUrl?: string): Promise<any>
}

const DEFAULTCONFIG = {
  baseURL: process.env.BASEURL,
}

const http = {} as IHttpRequest
const methods = ['get', 'post', 'put', 'delete', 'patch'] as Array<'get' | 'post' | 'put' | 'delete' | 'patch'>

methods.forEach(v => {
  http[v] = (url: string, data?: any, baseUrl?: string) => {
    const axiosConfig: IAxiosRequestConfig = {
      method: v,
      url,
      baseURL: baseUrl || DEFAULTCONFIG.baseURL,
    }
    const instance = axios.create(DEFAULTCONFIG)
    // Add a request interceptor
    // instance.interceptors.request.use(
    //   cfg => {
    //     cfg.params = { ...cfg.params }
    //     return cfg
    //   },
    //   error => Promise.reject(error)
    // )

    if (v === 'get') {
      axiosConfig.params = data
    } else if (data instanceof FormData) {
      axiosConfig.data = data
    } else {
      axiosConfig.data = qs.stringify(data)
    }
    axiosConfig.startTime = new Date()

    return instance
      .request(axiosConfig)
      .then(res => {
        const rs = res.data
        const { message: msg, status: code } = rs
        if (msg) {
          message.destroy()
          if (code === 0) {
            // message.success(msg)
          } else {
            message.error(msg)
          }
        }

        return Promise.resolve(res.data.data)
      })
      .catch(err => {
        const status = err && err.response && err.response.status

        if (status === 401) {
          console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: status', status)
          bridge.dispatch({ type: 'CHANGE_SHOW_LOGIN', payload: { showLogin: true } })

          return Promise.reject({})
        }

        message.destroy()
        message.error(err.msg || err.message || err.stack || '未知错误')

        return Promise.reject({ err, stack: err.msg || err.stack || '' })
      })
  }
})

export default http
