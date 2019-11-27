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

const InfoBlock: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '' } = {} }) => {
	console.log(username, jobTitle, company)
	return (
		<Wrapper>
			<div className="user-info">
				<div
					className="avatar"
					style={{
						background:
							"url('https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1') no-repeat center/cover"
					}}
				/>
				<div className="info-box">
					<span className="user-name">{username}</span>
					<span className="user-position" style={!jobTitle && !company ? { display: 'none' } : {}} />
					<span className="user-intro" style={!jobTitle && !company ? { display: 'none' } : {}}>
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
				<button className="setting-btn">编辑个人资料</button>
			</div>
		</Wrapper>
	)
}

export default InfoBlock
