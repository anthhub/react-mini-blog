import { getArticle } from '@/Api/article'
import useFetch from '@/hooks/useFetch'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import AppDownload from '../../components/AppDownload'
import Article from './Article'

import useDocumentTitle from '@/hooks/useDocumentTitle'
import { Wrapper } from './style'

const Post: React.FC = props => {
  const { id = '' } = useParams()
  useDocumentTitle('文章详情')

  const { data } = useFetch(getArticle, id)

  const item: ArticleEntity = data && data[0]

  return (
    <Wrapper>
      <Article {...item} />
    </Wrapper>
  )
}

export default Post
