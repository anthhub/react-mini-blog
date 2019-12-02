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
import ListBody from '../ListBodyPosts'

const ListHeader: React.FC = () => {
	const { id = '', item = '' } = useParams()

	const { articleList } = useSelector()

	return (
		<Wrapper>
			<header className="list-header">
				{/* 标题栏 */}
				<nav className="nav">
					<ul className="nav-list">
						<Link to={'/user/' + id + '/posts'}>
							<li className={item === '' || item === 'posts' ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">专栏</span>
								<span className="item-count">{articleList.length}</span>
							</li>
						</Link>
						<Link to={'/user/' + id + '/following'}>
							<li
								className={
									item === 'following' || item === 'followers' ? 'nav-item active' : 'nav-item'
								}
							>
								<span className="item-title">关注</span>
								<span className="item-count">50</span>
							</li>
						</Link>
						<Link to={'/user/' + id + '/likes'}>
							<li className={item === 'likes' ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">赞</span>
								<span className="item-count">17</span>
							</li>
						</Link>
					</ul>
				</nav>

				{/* 子标题栏 */}
				{item === 'posts' || item === '' ? (
					<div className="sub-header">
						<div className="sub-header-left">专栏</div>
					</div>
				) : item === 'following' ? (
					<div className="sub-header">
						<div className="sub-header-left">关注</div>
						<div className="sub-header-right">
							<Link to={'/user/' + id + '/following'} className="following active">
								关注了
							</Link>
							<Link to={'/user/' + id + '/followers'} className="followers">
								关注者
							</Link>
						</div>
					</div>
				) : item === 'followers' ? (
					<div className="sub-header">
						<div className="sub-header-left">关注</div>
						<div className="sub-header-right">
							<Link to={'/user/' + id + '/following'} className="following">
								关注了
							</Link>
							<Link to={'/user/' + id + '/followers'} className="followers active">
								关注者
							</Link>
						</div>
					</div>
				) : item === 'likes' ? (
					<div className="sub-header">
						<div className="sub-header-left">赞</div>
					</div>
				) : null}
			</header>
		</Wrapper>
	)
}

export default ListHeader
