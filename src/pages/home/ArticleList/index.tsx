import { getArticles } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/hooks/useFetch'
import React, { useState } from 'react'
import Article from '../Article'
import { Wrapper } from './style'
import { useParams, useRouteMatch, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const ArticleList: React.FC = (props) => {
	const query = useLocation()

	console.log('111', query)

	const { data } = useFetch(getArticles)
	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: data', data)

	const list = (data && data.edges) || []

	const [ active, setActive ] = useState(0)

	return (
		<Wrapper>
			<header className="header">
				<nav className="nav">
					<ul className="nav-list">
						<li className={active === 0 ? 'nav-item active' : 'nav-item'} onClick={() => setActive(0)}>
							<Link to={{ pathname: '', search: 'sort=all' }}>全部</Link>
						</li>
						<li className={active === 1 ? 'nav-item active' : 'nav-item'} onClick={() => setActive(1)}>
							<Link to={{ pathname: '', search: 'sort=mine' }}>我的</Link>
						</li>
					</ul>
				</nav>
			</header>

			<ul>{list.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul>
		</Wrapper>
	)
}

export default ArticleList

/*
搜索功能
添加图片功能
添加小程序小图标
检查标题不为空
写文章按钮权限
*/
