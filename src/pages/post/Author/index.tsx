// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import useFetch from '@/lib/hooks/useFetch'
import { getLikedCount, getViewCount } from '@/Api/user'
import { toThousands } from '@/pages/user/StatBlock'

interface IProps {
	user: {
		username: string
		jobTitle: string
		company: string
		avatarLarge: string
		id: string
	}
}

const Author: React.FC<IProps> = ({
	user: { username = '', jobTitle = '', company = '', avatarLarge = '', id = '' } = {}
}) => {
	// console.log(username, jobTitle, company)

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
		<Wrapper avatarLarge={avatarLarge}>
			<header className="author-title">关于作者</header>
			<div className="author-info">
				<Link className="author-desc" to={'/user/' + id} target="_blank">
					<div className="avatar" />
					<div className="info">
						<span className="author-name">{username}</span>
						<span className="author-intro" style={!jobTitle && !company ? { display: 'none' } : {}}>
							{jobTitle && company ? (
								jobTitle + ' @ ' + company
							) : jobTitle ? (
								jobTitle
							) : company ? (
								company
							) : (
								'暂无简介'
							)}
						</span>
					</div>
				</Link>
				<div className="agree">
					<i className="icon" />
					<span>获得点赞</span>
					<span className="count">{toThousands(likedCount)}</span>
				</div>
				<div className="views">
					<i className="icon" />
					<span>文章被阅读</span>
					<span className="count">{toThousands(viewCount)}</span>
				</div>
			</div>
		</Wrapper>
	)
}

export default Author
