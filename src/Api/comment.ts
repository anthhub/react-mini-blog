import axios from 'axios'

import { CreateArticleDto } from '@/modal/dtos/article.dto'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { IPage } from '@/modal/interfaces/common.interface'

import http from './request'
import { baseUrl } from './url'
import { CreateCommentDto } from '@/modal/dtos/comment.dto'

// const article = {
// 	query: `/article/query`,
// 	detail: `/article/`,
// 	create: `/article`,
// 	reedit: `/article/`,
// 	delete: `/article`,
// 	viewCount: `/article/`
// }

const comment = {
  create: `/comment`,
  query: `/comment/`,
}

// export const getArticles = (data?: any) => {
// 	return http.get(baseUrl + article.query, data || {}).then((res) => {
// 		return res as IPage<ArticleEntity>
// 	})
// }

export const getCommentList = (articleId: string) => {
  return http.get(baseUrl + comment.query + articleId).then(res => {
    return res
  })
}

export const createComment = (data: CreateCommentDto) => {
  return http.post(baseUrl + comment.create, data).then(res => {
    return res
  })
}

// export const reeditArticle = (articleId: string, data: CreateArticleDto) => {
// 	return http.patch(baseUrl + article.reedit + articleId, data).then((res) => {
// 		return res
// 	})
// }

// export const deleteArticle = (articleId: string) => {
// 	return http.delete(baseUrl + article.delete + `?id=` + articleId).then((res) => {
// 		return res
// 	})
// }

// export const putViewCount = (articleId: string) => {
// 	return http.put(baseUrl + article.viewCount + articleId + '/putViewCount').then((res) => {
// 		return res
// 	})
// }
