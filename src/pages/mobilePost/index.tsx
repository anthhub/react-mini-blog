import { getArticle } from '@/Api/article'
import useDocumentTitle from '@/hooks/useDocumentTitle'
import useFetch from '@/hooks/useFetch'
import { ArticleEntity } from '@/modal/entities/article.entity'
import React from 'react'
import { useParams } from 'react-router'
import Article from './Article'
import Author from './Author'
import { Wrapper } from './style'

const MobilePost: React.FC = (props) => {
	const { id = '' } = useParams()
	useDocumentTitle('文章详情')

	const { data } = useFetch(() => getArticle(id))

	const item: ArticleEntity = data && data[0]

	return (
		<Wrapper>
			<Author {...item} />
			<Article {...item} />
		</Wrapper>
	)
}

export default MobilePost
