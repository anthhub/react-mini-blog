import { getArticle, putViewCount } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/lib/hooks/useFetch'
import { BackTop } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import AppDownload from '../../components/AppDownload'
import Article from './Article'
import Comment from './Comment'
import Author from './Author'
import Catalog from './Catalog'
import SuspendedPanel from './SuspendedPanel'
import { Wrapper } from './style'
import { useSelector } from '@/redux/context'

const Post: React.FC = (props) => {
	// 文章id
	const { id = '' } = useParams()

	const { articleList = [] } = useSelector()

	// 从 store 中的文章列表中找到 url 中 id 对应的文章
	const article = articleList.find((item) => id === item.id) || {}

	const { data = article } = useFetch(() => getArticle(id))

	const item: ArticleEntity = data
	// && data[0]

	// console.log(data, '444')

	useEffect(
		() => {
			putViewCount(id)
		},
		[ id ]
	)

	return (
		<Wrapper>
			<div className="left">
				<Article {...item} />
				<Comment {...item} />
				<SuspendedPanel {...item} />
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
