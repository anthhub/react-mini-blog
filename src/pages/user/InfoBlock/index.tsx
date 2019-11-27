// 详情页 右侧 作者简介卡片

import React, { useCallback } from 'react'
import { Wrapper } from './style'
import avatarPic from '../../../statics/avatar.png'
import { useSelector } from '@/redux/context'
import { useHistory } from 'react-router'

interface IProps {
	user: {
		username: string
		jobTitle: string
		company: string
	}
}

const InfoBlock: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '' } = {} }) => {
	// console.log(username, jobTitle, company)
	const { user: { avatarLarge = avatarPic } } = useSelector()
	const history = useHistory()
	const onSetting = useCallback(async () => {
		history.push('/settings')
	}, [])

	return (
		<Wrapper avatarLarge={avatarLarge}>
			<div className="user-info">
				<div className="avatar" />
				<div className="info-box">
					<span className="user-name">xiaohuang</span>
					<span className="user-position" title="填写职位信息" onClick={onSetting}>
						+ 你从事什么职业？
					</span>
					<span className="user-intro" title="填写个人介绍" onClick={onSetting}>
						+ 你的信仰是什么？
					</span>
				</div>
				<button className="setting-btn" onClick={onSetting}>
					编辑个人资料
				</button>
			</div>
		</Wrapper>
	)
}

export default InfoBlock
