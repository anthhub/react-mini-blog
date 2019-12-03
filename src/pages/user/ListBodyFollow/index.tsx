import React, { useState, useEffect, useCallback } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'

const ListBodyFollow: React.FC = () => {
	const { followingList, followersList } = useSelector()
	// console.log(followingList, 'followingList')
	console.log(followersList, 'followersList')

	const { item = '' } = useParams()

	return (
		<Wrapper>
			{/* <ul>{articleList.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul> */}

			<ul className="list-group">
				{item === 'followers' ? (
					followersList.map((item: any) => (
						<li className="list-item" key={item.follower.id}>
							<Link to={'/user/' + item.follower.id} target="_blank" className="user-link">
								<div
									className="avatar"
									style={{
										background: `#eee url(${item.follower.avatarLarge}) no-repeat center/cover`
									}}
								/>
								<div className="info-box">
									<div className="username">{item.follower.username}</div>

									{item.follower.jobTitle && item.follower.company ? (
										<div className="detail">
											{item.follower.jobTitle + ' @ ' + item.follower.company}
										</div>
									) : item.follower.jobTitle ? (
										<div className="detail">{item.follower.jobTitle}</div>
									) : item.follower.company ? (
										<div className="detail">{item.follower.company}</div>
									) : null}
								</div>
								<button type="button" className="follow-btn">
									关注
								</button>
							</Link>
						</li>
					))
				) : (
					followingList.map((item: any) => (
						<li className="list-item" key={item.following.id}>
							<Link to={'/user/' + item.following.id} target="_blank" className="user-link">
								<div
									className="avatar"
									style={{
										background: `#eee url(${item.following.avatarLarge}) no-repeat center/cover`
									}}
								/>
								<div className="info-box">
									<div className="username">{item.following.username}</div>

									{item.following.jobTitle && item.following.company ? (
										<div className="detail">
											{item.following.jobTitle + ' @ ' + item.following.company}
										</div>
									) : item.following.jobTitle ? (
										<div className="detail">{item.following.jobTitle}</div>
									) : item.following.company ? (
										<div className="detail">{item.following.company}</div>
									) : null}
								</div>
								<button type="button" className="follow-btn active">
									已关注
								</button>
							</Link>
						</li>
					))
				)}
			</ul>
		</Wrapper>
	)
}

export default ListBodyFollow
