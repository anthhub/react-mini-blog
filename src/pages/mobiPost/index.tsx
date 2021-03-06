import { getArticle } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import { ArticleEntity } from '@/modal/entities/article.entity'
import React from 'react'
import { useParams } from 'react-router'

import Article from './Article'

import useDocumentTitle from '@/lib/hooks/useDocumentTitle'
import { Wrapper } from './style'

const Post: React.FC = props => {
  const { id = '' } = useParams() as any
  useDocumentTitle('文章详情')

  const { data } = useFetch(() => getArticle(id))

  const item: ArticleEntity = data && data[0]

  return (
    <Wrapper>
      <Article {...item} />
    </Wrapper>
  )
}

export default Post
