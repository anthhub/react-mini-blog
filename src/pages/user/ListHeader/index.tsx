import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles } from '@/Api/user'
import ListBody from '../ListBody'

const ListHeader: React.FC = () => {
	const { id = '' } = useParams()

	const [ activeItem, setActiveItem ] = useState(0)

	const { articleList } = useSelector()

	return (
		<Wrapper>
			<header className="list-header">
				<nav className="nav">
					<ul className="nav-list">
						<Link
							to={'/user/' + id + '/posts'}
							onClick={() => {
								setActiveItem(0)
							}}
						>
							<li className={activeItem === 0 ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">专栏</span>
								<span className="item-count">{articleList.length}</span>
							</li>
						</Link>
						<Link
							to={'/user/' + id + '/following'}
							onClick={() => {
								setActiveItem(1)
							}}
						>
							<li className={activeItem === 1 ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">关注</span>
								<span className="item-count">50</span>
							</li>
						</Link>
						<Link
							to={'/user/' + id + '/likes'}
							onClick={() => {
								setActiveItem(2)
							}}
						>
							<li className={activeItem === 2 ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">赞</span>
								<span className="item-count">17</span>
							</li>
						</Link>
					</ul>
				</nav>
			</header>
		</Wrapper>
	)
}

export default ListHeader
