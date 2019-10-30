import axios from 'axios'

const BaseUrl = 'http://10.48.48.81:3003/api/v1/article/'
const getArticles = () => {
  return axios.get(BaseUrl + 'query').then(res => {
    return res.data
  })
}

export { getArticles }
