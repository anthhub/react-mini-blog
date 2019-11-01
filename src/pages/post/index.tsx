import { getArticle } from '@/Api/article'
import { ArticleEntity } from '@/entities/article.entity'
import useFetch from '@/hooks/useFetch'
import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import AppDownload from '../../components/AppDownload'
import Article from './Article'
import Author from './Author'
import Catalog from './Catalog'
import Recommended from './Recommended'
// import { connect } from 'react-redux';
import { Wrapper } from './style'

const Post: React.FC = props => {
  const { id = '' } = useParams()

  const { data } = useFetch(getArticle, id)

  const item: ArticleEntity = data && data[0]

  return (
    <Wrapper>
      <div className="left">
        <Article {...item} />
        <Recommended />
      </div>
      <div className="right">
        <Author />
        <AppDownload />
        <Catalog />
      </div>
      <BackTop />
    </Wrapper>
  )
}

export default Post
