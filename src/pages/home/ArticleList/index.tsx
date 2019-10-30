import { getArticles } from '@/Api/article'
import useFetch from '@/hooks/useFetch'
import React, { useEffect } from 'react'
// import { connect } from 'react-redux';
import Article from '../Article'
import { Wrapper } from './style'

const ArticleList: React.FC = props => {
  const { data, doFetch } = useFetch(getArticles)
  console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: data', data)

  useEffect(() => {
    doFetch()
  }, [])

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
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </ul>
    </Wrapper>
  )
}

export default ArticleList
