import { getArticle } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router'
import Author from './Author'
import Article from './Article'
import { Wrapper } from './style'

const MobilePost: React.FC = (props) => {
	const { id = '' } = useParams()

	const { data } = useFetch(getArticle, id)

	const item: ArticleEntity = data && data[0]

	return (
		<Wrapper>
			<Author {...item} />
			<Article {...item} />
		</Wrapper>
	)
}

export default MobilePost
