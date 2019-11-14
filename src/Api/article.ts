import { CreateArticleDto } from '@/modal/dtos/article.dto'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { IPage } from '@/modal/interfaces/common.interface'
import axios from 'axios'
import { baseUrl } from './url'

const article = {
	query: `/article/query`,
	detail: `/article/`,
	create: `/article`
}

export const getArticles = (data?: any) => {
	return axios.get(baseUrl + article.query, data || {}).then((res) => {
		return res.data.data as IPage<ArticleEntity>
	})
}

export const getArticle = (id: string) => {
	return axios.get(baseUrl + article.detail + id).then((res) => {
		return res.data.data
	})
}

export const createArticle = (data: CreateArticleDto) => {
	return axios.post(baseUrl + article.create, data).then((res) => {
		return res.data.data
	})
}
