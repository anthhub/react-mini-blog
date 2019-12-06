import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getArticles, deleteArticle } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles } from '@/Api/user'
import { formatDate } from '@/pages/home/Article'
import { title } from 'process'
import { matchReg } from '@/pages/post/Catalog'
import { translateMarkdown } from '@/lib/utils/markdown'
import ListBodyPost from '../ListBodyPost'

interface IProps extends ArticleEntity {}

const ListBodyPosts: React.FC = () => {
  const { articleList } = useSelector()

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
