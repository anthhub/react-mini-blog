import { getArticle } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/lib/hooks/useFetch'
import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import AppDownload from '../../components/AppDownload'
import Article from './Article'
import Author from './Author'
import Catalog from './Catalog'
import { Wrapper } from './style'
import { useSelector } from '@/redux/context'

const Post: React.FC = (props) => {
	const { id = '' } = useParams()

	const { articleList = [] } = useSelector()

	// 从 store 中的文章列表中找到 url 中 id 对应的文章
	const article = articleList.find((item) => id === item.id) || {}

	const { data = article } = useFetch(() => getArticle(id))

	const item: ArticleEntity = data
	// && data[0]

	// console.log(item, '444')

	return (
		<Wrapper>
			<div className="left">
				<Article {...item} />
			</div>
			<div className="right">
				<Author {...item} />
				<AppDownload />
				<Catalog {...item} />
			</div>
			<BackTop />
		</Wrapper>
	)
}

export default Post
