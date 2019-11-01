import { getArticles } from '@/Api/article'
import { ArticleEntity } from '@/entities/article.entity'
import useFetch from '@/hooks/useFetch'
import { IPage } from '@/interfaces/common.interface'
import React from 'react'
// import { connect } from 'react-redux';
import Article from '../Article'
import { Wrapper } from './style'

const ArticleList: React.FC = props => {
  const { data } = useFetch(getArticles)
  console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: data', data)

  const list = (data && (data as IPage<ArticleEntity>).edges) || []

  return (
    <Wrapper>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item active">
              <a>热门</a>
            </li>
            <li className="nav-item">
              <a>最新</a>
            </li>
            <li className="nav-item">
              <a>热榜</a>
            </li>
          </ul>
        </nav>
      </header>

      <ul>
        {list.map((item: ArticleEntity) => (
          <Article {...item} key={item._id} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default ArticleList
