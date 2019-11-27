// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'

interface IProps {
	user: {
		username: string
		jobTitle: string
		company: string
	}
}

const StatBlock: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '' } = {} }) => {
	console.log(username, jobTitle, company)
	return (
		<Wrapper>
			<header className="block-title">个人成就</header>
			<div className="block-body">
				<i className="icon" />
				<div className="content">
					<span>文章被阅读</span>
					<span className="count">24</span>
				</div>
			</div>
		</Wrapper>
	)
}

export default StatBlock
