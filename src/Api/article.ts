import { CreateArticleDto } from '@/modal/dtos/article.dto'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { IPage } from '@/modal/interfaces/common.interface'

import http from './request'
import { baseUrl } from './url'

const article = {
  query: `/article/query`,
  detail: `/article/`,
  create: `/article`,
  reedit: `/article/`,
  delete: `/article`,
  viewCount: `/article/`,
}

export const getArticles = (data?: any) => {
  return http.get(baseUrl + article.query, data || {}).then(res => {
    return res as IPage<ArticleEntity>
  })
}

export const getArticle = (articleId: string) => {
  return http.get(baseUrl + article.detail + articleId).then(res => {
    return res
  })
}

export const createArticle = (data: CreateArticleDto) => {
  return http.post(baseUrl + article.create, data).then(res => {
    return res
  })
}

export const reeditArticle = (articleId: string, data: CreateArticleDto) => {
  return http.patch(baseUrl + article.reedit + articleId, data).then(res => {
    return res
  })
}

export const deleteArticle = (articleId: string) => {
  return http.delete(baseUrl + article.delete + `?id=` + articleId).then(res => {
    return res
  })
}

export const putViewCount = (articleId: string) => {
  return http.put(baseUrl + article.viewCount + articleId + '/putViewCount').then(res => {
    return res
  })
}
