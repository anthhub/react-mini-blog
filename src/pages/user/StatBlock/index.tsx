// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'
import { useParams } from 'react-router'
import useFetch from '@/lib/hooks/useFetch'
import { getFollowingCount, getFollowersCount, getLikedCount, getViewCount } from '@/Api/user'

// interface IProps {
// 	user: {
// 		username: string
// 		jobTitle: string
// 		company: string
// 	}
// }

const StatBlock: React.FC = () => {
	const { id = '' } = useParams()
	// console.log(id, '啦啦啦 id')
	const { data: likedCount = '' } = useFetch(
		async () => {
			const count = await getLikedCount(id)
			// console.log(userInfo, 'userInfo--------------------')
			return count
		},
		[ id ]
	)

	const { data: viewCount = '' } = useFetch(
		async () => {
			const count = await getViewCount(id)
			// console.log(userInfo, 'userInfo--------------------')
			return count
		},
		[ id ]
	)

	return (
		<Wrapper>
			<header className="block-title">个人成就</header>
			<div className="block-body">
				<div className="stat-item">
					<i className="icon" />
					<div className="content">
						<span>获得点赞</span>
						<span className="count">{likedCount}</span>
					</div>
				</div>
				<div className="stat-item">
					<i className="icon" />
					<div className="content">
						<span>文章被阅读</span>
						<span className="count">{viewCount}</span>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default StatBlock
