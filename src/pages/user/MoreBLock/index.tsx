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

const MoreBLock: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '' } = {} }) => {
	console.log(username, jobTitle, company)
	return (
		<Wrapper>
			<div className="more-item">
				<div className="item-title">加入于</div>
				<div className="item-count">
					<time className="item">2019-06-05</time>
				</div>
			</div>
		</Wrapper>
	)
}

export default MoreBLock
