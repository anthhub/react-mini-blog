// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

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
	user: { username = '', jobTitle = '', company = '', avatarLarge = '', id } = {}
}) => {
	// console.log(username, jobTitle, company)
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
					<span className="count">7,113</span>
				</div>
				<div className="views">
					<i className="icon" />
					<span>文章被阅读</span>
					<span className="count">179,331</span>
				</div>
			</div>
		</Wrapper>
	)
}

export default Author
