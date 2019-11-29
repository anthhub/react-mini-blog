// 详情页 右侧 作者简介卡片

import React, { useCallback } from 'react'
import { Wrapper } from './style'
import avatarPic from '../../../statics/avatar.png'
import { useSelector } from '@/redux/context'
import { useHistory } from 'react-router'

interface IProps {
	user: {
		avatarLarge: string
		username: string
		jobTitle: string
		company: string
		selfDescription: string
	}
}

const InfoBlock: React.FC<IProps> = ({
	user: { avatarLarge = avatarPic, username = '', jobTitle = '', company = '', selfDescription = '' }
}) => {
	console.log(
		'===================================================',
		username,
		jobTitle,
		company,
		selfDescription,
		'==================================================='
	)

	// 因为要保证所有用户的都能拿到，不应该从 store 中拿
	// const { user: { avatarLarge = avatarPic } } = useSelector()
	const history = useHistory()
	const onSetting = useCallback(async () => {
		history.push('/settings')
	}, [])

	return (
		<Wrapper avatarLarge={avatarLarge}>
			<div className="user-info">
				<div className="avatar" />
				<div className="info-box">
					<span className="user-name">{username}</span>

{/* 第二行：职位和公司 */}
					{!jobTitle && !company ? (
						// 都沒填
						<span className="user-position" title="填写职位信息" onClick={onSetting}>
							+ 你从事什么职业？
						</span>
					) : jobTitle && company ? (
						// 都填了
						<div>
							<i className="icon" />
							<span>{jobTitle}</span>
							<span>|</span>
							<span>{company}</span>
						</div>
					) : (
						// 只填了一個
						<div>
							<i className="icon" />
							<span>{jobTitle ? jobTitle : company}</span>{' '}
						</div>
					)}

{/* 第三行：个人介绍 */}
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
