import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'

import { getArticle } from '@/Api/article'
import { getUserArticles, getUserInfo } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useDispatch, useSelector } from '@/redux/context'

import FallowBlock from './FallowBlock'
import InfoBlock from './InfoBlock'
import ListBlock from './ListBlock'
import MoreBLock from './MoreBLock'
import StatBlock from './StatBlock'
import { Wrapper } from './style'

const User: React.FC = props => {
  const { id = '' } = useParams()

  // 文章列表和作者信息要分开拿
  const { data: info = {} } = useFetch(async () => {
    const userInfo = await getUserInfo(id)
    return userInfo
  }, [id])

  return (
    <Wrapper>
      <div className="left">
        <InfoBlock user={info} />
        <ListBlock />
      </div>
      <div className="right">
        <div className="sticky-wrap">
          <StatBlock user={info} />
          <FallowBlock />
          <MoreBLock user={info} />
        </div>
      </div>
      <BackTop />
    </Wrapper>
  )
}

export default User
