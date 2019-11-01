import axios from 'axios'

// const BaseUrl = 'http://10.48.50.55:3003/api/v1/article/'

const BaseUrl = 'http://localhost:3003/api/v1/article/'

export const getArticles = () => {
  return axios.get(BaseUrl + 'query').then(res => {
    return res.data.data
  })
}

export const getArticle = (id: string) => {
  return axios.get(BaseUrl + id).then(res => {
    return res.data.data
  })
}
