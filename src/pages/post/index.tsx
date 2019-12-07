import { BackTop } from 'antd'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { getArticle, putViewCount } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useSelector } from '@/redux/context'

import AppDownload from '../../components/AppDownload'
import Article from './Article'
import Author from './Author'
import Catalog from './Catalog'
import Comment from './Comment'
import { Wrapper } from './style'
import SuspendedPanel from './SuspendedPanel'
import Advertising from '@/components/Advertising'

const Post: React.FC = props => {
  // 文章id
  const { id = '' } = useParams()

  const { articleList = [] } = useSelector()

  // 从 store 中的文章列表中找到 url 中 id 对应的文章
  const article = articleList.find((it: any) => id === it.id) || {}

  const { data = article } = useFetch(() => getArticle(id))

  const item: ArticleEntity = data

  useEffect(() => {
    putViewCount(id)
  }, [id])

  return (
    <Wrapper>
      <div className="left">
        <Article {...item} />
        <Comment {...item} />
        <SuspendedPanel {...item} />
      </div>
      <div className="right">
        <Advertising />
        <Author {...item} />
        <AppDownload />
        <Catalog {...item} />
      </div>
      <BackTop />
    </Wrapper>
  )
}

export default Post
