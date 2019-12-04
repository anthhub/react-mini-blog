// 详情页 右侧 作者简介卡片

import React, { useCallback } from 'react'
import { Wrapper } from './style'
import { useSelector } from '@/redux/context'
import { useHistory } from 'react-router'
import useToggle from '@/lib/hooks/useToggle'
import { addFollow, deleteFollow } from '@/Api/follow'

interface IProps {
	user: {
		id: string
		avatarLarge: string
		username: string
		jobTitle: string
		company: string
		selfDescription: string
	}
}

const InfoBlock: React.FC<IProps> = ({
	user: { id = '', avatarLarge = '', username = '', jobTitle = '', company = '', selfDescription = '' } = {}
}) => {
	// 因为要保证所有用户的都能拿到，不应该从 store 中拿
	// const { user: { avatarLarge = avatarPic } } = useSelector()
	const history = useHistory()
	const onSetting = useCallback(async () => {
		history.push('/settings')
	}, [])

	const { flag, onToggle } = useToggle(false)
	console.log(id)

	const onFollow = useCallback(
		async () => {
			console.log(id, 'id')
			flag ? await deleteFollow(id) : await addFollow(id)
			onToggle()
		},
		[ flag, id ]
	)

	// 拿到当前登录用户的 id
	const { user: { id: loginId } } = useSelector()
	// console.log(loginId, 'loginId')

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
						<div className="user-position filled">
							<i className="icon" />
							<span>{jobTitle}</span>
							<span className="split" />
							<span>{company}</span>
						</div>
					) : (
						// 只填了一個
						<div className="user-position filled">
							<i className="icon" />
							<span>{jobTitle ? jobTitle : company}</span>
						</div>
					)}

					{/* 第三行：个人介绍 */}
					{!selfDescription ? (
						<span className="user-intro" title="填写个人介绍" onClick={onSetting}>
							+ 你的信仰是什么？
						</span>
					) : (
						<div className="user-intro filled">
							<i className="icon" />
							<span>{selfDescription}</span>
						</div>
					)}
				</div>
				{loginId === id ? (
					<button className="setting-btn" onClick={onSetting}>
						编辑个人资料
					</button>
				) : flag ? (
					<button className="follow-btn followed" onClick={onFollow}>
						已关注
					</button>
				) : (
					<button className="follow-btn" onClick={onFollow}>
						关注
					</button>
				)}
			</div>
		</Wrapper>
	)
}

export default InfoBlock
