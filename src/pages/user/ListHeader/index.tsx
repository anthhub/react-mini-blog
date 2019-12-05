import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles, getUserLikes, getUserFollowing, getUserFollowers } from '@/Api/user'
import ListBody from '../ListBodyPosts'

const ListHeader: React.FC = () => {
	const { id = '', item = '' } = useParams()

	const dispatch = useDispatch()
	// 分页部分的数据统一在 header 中拿到（因爲 header 一定會渲染），再放入 store 中供分页组件使用
	// 根据 id 拿用户文章列表
	const { data: articleList = [] } = useFetch(
		async () => {
			const rs = await getUserArticles(id)
			// console.log(rs, 'rs--------------------')
			const list = (rs && rs.edges) || []
			// console.log(list, 'list--------------------')
			dispatch({
				type: 'CHANGE_ARTICLE_LIST',
				payload: { articleList: [ ...list ] }
			})
			return list
		},
		[ id ]
	)

	// 根据 id 该用户关注和被关注的用户列表
	const { data: followingList = [] } = useFetch(async () => {
		const rs = await getUserFollowing(id)
		// console.log(rs, 'rs--------------------')
		const list = (rs && rs.edges) || []
		console.log(list, 'followingList--------------------')
		dispatch({
			type: 'CHANG_FOLLOWING_LIST',
			payload: { followingList: [ ...list ] }
		})
		return list
	}, [])

	const { data: followersList = [] } = useFetch(async () => {
		const rs = await getUserFollowers(id)
		// console.log(rs, 'rs--------------------')
		const list = (rs && rs.edges) || []
		console.log(list, 'followersList--------------------')
		dispatch({
			type: 'CHANGE_FOLLOWERS_LIST',
			payload: { followersList: [ ...list ] }
		})
		return list
	}, [])


	// 根据 id 拿用户点赞的文章列表
	const { data: likeList = [] } = useFetch(
		async () => {
			const rs = await getUserLikes(id)
			// console.log(rs, 'rs--------------------')
			const list = (rs && rs.edges) || []
			console.log(list, 'list--------------------')
			dispatch({
				type: 'CHANGE_LIKE_LIST',
				payload: { likeList: [ ...list ] }
			})
			return list
		},
		[ id ]
	)

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
								{/* <span className="item-count">50</span> */}
							</li>
						</Link>
						<Link to={'/user/' + id + '/likes'}>
							<li className={item === 'likes' ? 'nav-item active' : 'nav-item'}>
								<span className="item-title">赞</span>
								<span className="item-count">{likeList.length}</span>
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
