// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'

// interface IProps {
// 	user: {
// 		username: string
// 		jobTitle: string
// 		company: string
// 	}
// }

const StatBlock: React.FC = () => {
	// console.log(username, jobTitle, company)
	return (
		<Wrapper>
			<header className="block-title">个人成就</header>
			<div className="block-body">
				<div className="stat-item">
					<i className="icon" />
					<div className="content">
						<span>获得点赞</span>
						<span className="count">200</span>
					</div>
				</div>
				<div className="stat-item">
					<i className="icon" />
					<div className="content">
						<span>文章被阅读</span>
						<span className="count">24</span>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default StatBlock
