// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'
import { Link, useParams } from 'react-router-dom'
import { getFollowingCount, getFollowersCount } from '@/Api/user'
import useFetch from '@/lib/hooks/useFetch'

const FallowBlock: React.FC = () => {
	const { id = '' } = useParams()
	// console.log(id, '啦啦啦 id')
	const { data: followingCount = '' } = useFetch(
		async () => {
			const count = await getFollowingCount(id)
			// console.log(userInfo, 'userInfo--------------------')
			return count
		},
		[ id ]
	)

	const { data: followersCount = '' } = useFetch(
		async () => {
			const count = await getFollowersCount(id)
			// console.log(userInfo, 'userInfo--------------------')
			return count
		},
		[ id ]
	)

	return (
		<Wrapper>
			<Link className="follow-item" to={'/user/' + id + '/following'}>
				<div className="item-title">关注了</div>
				<div className="item-count">{followingCount}</div>
			</Link>
			<Link className="follow-item" to={'/user/' + id + '/followers'}>
				<div className="item-title">关注者</div>
				<div className="item-count">{followersCount}</div>
			</Link>
		</Wrapper>
	)
}

export default FallowBlock
