import { title } from 'process'
import { async } from 'q'
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { deleteArticle, getArticles } from '@/Api/article'
import { getUserArticles, getUserInfo } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { formatDate } from '@/pages/home/Article'
import { matchReg } from '@/pages/post/Catalog'
import { useDispatch, useIsLogin, useSelector } from '@/redux/context'

import ListBodyPost from '../ListBodyPost'
import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const ListBodyPosts: React.FC = () => {
  const { id = '' } = useParams()

  const dispatch = useDispatch()
  // 根据 id 拿用户文章列表
  useFetch(async () => {
    const rs = await getUserArticles(id)
    const list = (rs && rs.edges) || []
    dispatch({
      type: 'CHANGE_ARTICLE_LIST',
      payload: { articleList: [...list] },
    })
    return list
  }, [id])

  const { articleList = [] } = useSelector()

  return (
    <Wrapper>
      <ul className="list-group">
        {articleList.map((item: ArticleEntity) => (
          <ListBodyPost {...item} key={item.id} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default ListBodyPosts
