import { getArticle } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/hooks/useFetch'
import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import AppDownload from '../../components/AppDownload'
import Article from './Article'
import Author from './Author'
import Catalog from './Catalog'
import { Wrapper } from './style'

const Post: React.FC = (props) => {
	const { id = '' } = useParams()

	const { data } = useFetch(() => getArticle(id))

	const item: ArticleEntity = data
	// && data[0]

	console.log(item, '444')

	return (
		<Wrapper>
			<div className="left">
				<Article {...item} />
			</div>
			<div className="right">
				<Author />
				<AppDownload />
				<Catalog {...item} />
			</div>
			<BackTop />
		</Wrapper>
	)
}

export default Post
