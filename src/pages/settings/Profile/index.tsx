import React, { useCallback } from 'react'
import { Wrapper } from './style'
import InfoGroup from '../InfoGroup'
import { useSelector, useDispatch } from '@/redux/context'
import { uploadFile } from '@/Api/file'
import avatarPic from '../../../statics/avatar.png'
import { userUpdate, getUserInfo } from '@/Api/user'
import { message } from 'antd'

const infoList: Array<{
	title: string
	field: string
	placeholder?: string
}> = [
	{ title: '用户名', field: 'username' },
	{ title: '职位', field: 'jobTitle' },
	{ title: '公司', field: 'company' },
	{
		title: '个人介绍',
		field: 'selfDescription',
		placeholder: '填写职业技能、擅长的事情、喜欢的事情等'
	},
	{ title: '个人主页', field: 'blogAddress' }
]

const Profile: React.FC = (props) => {
	const dispatch = useDispatch()

	// 拿到用户头像 没有设置则使用默认头像
	const { user = {} } = useSelector()

	const onUpload = useCallback(async (e: any) => {
		const formData = new FormData()
		const file = e.target.files[0]
		// console.log(file)
		// 上传文件不大于 5M
		if (file.size > 5 * Math.pow(1024, 2)) {
			return message.warning('图片过大')
		}
		formData.append('file', file)
		// console.log(formData.get('file'))
		// 上传文件并拿到 url
		const { url } = await uploadFile(formData)
		console.log(url, '==url==')
		// 更新用户信息中的头像路径
		await userUpdate({
			avatarLarge: url
		})
		// 拿到服务器用户信息
		const userInfo = await getUserInfo(user.id)
		console.log(userInfo, '==userInfo==')
		// 用服务器数据覆盖 store 的用户信息（本地与服务器同步）
		dispatch({
			type: 'UPDATE_USER',
			payload: { user: { ...userInfo } }
		})
	}, [])

	return (
		<Wrapper avatarLarge={user.avatarLarge}>
			<div>
				<h1 className="title">个人资料</h1>
				<ul className="setting-list">
					<li className="item">
						<span className="item-title">头像</span>
						<div className="avatar-uploader">
							<div className="avatar" />
							<div className="upload">
								<div className="hint">支持 jpg、png 格式大小 5M 以内的图片</div>
								<button className="upload-btn">点击上传</button>
								<input
									type="file"
									accept="image/*"
									id={'fileRef'}
									className="hidden-input"
									onChange={onUpload}
								/>
							</div>
						</div>
					</li>
					{infoList.map((item) => (
						<li className="item" key={item.title}>
							<InfoGroup item={item} />
						</li>
					))}
				</ul>
			</div>
		</Wrapper>
	)
}

export default Profile
