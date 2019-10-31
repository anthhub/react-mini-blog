import { ArticleEntity } from '@/entities/article.entity'
import { IPage } from '@/interfaces/common.interface'
import axios from 'axios'

const BaseUrl = 'http://localhost:3003/api/v1/article/'
const getArticles = () => {
  return axios.get(BaseUrl + 'query').then(res => {
    return res.data.data
  })
}

export { getArticles }
