import React, { useRef } from 'react'
import useToggle from '@/hooks/useToggle'
import { Wrapper } from './style'

const Profile: React.FC = (props) => {
	// 个人信息是否处于被编辑状态
	// const editFlag: boolean = true
	// const editFlag: boolean = false

	const { flag: editFlag, onToggle: toggleEditFlag } = useToggle(false)

	const onUpload = (e: any) => {
		const formData = new FormData()
		const file = e.target.files[0]
		formData.append('file', file)
	}

	const getBtn = (status: boolean) => {
		return status ? (
			<div className="edit-box" onClick={toggleEditFlag}>
				<button className="confirm-btn">保存</button>
				<button className="cancel-btn">取消</button>
			</div>
		) : (
			<div className="edit-box" onClick={toggleEditFlag}>
				<button className="edit-btn">
					<i className="edit-icon" />
					<span>修改</span>
				</button>
			</div>
		)
	}

	return (
		<Wrapper>
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
					<li className="item">
						<span className="item-title">
							{/* value={username} */}
							用户名
						</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的用户名" />
							{getBtn(editFlag)}
						</div>
					</li>
					<li className="item">
						<span className="item-title">邮箱</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的邮箱" />
							{getBtn(editFlag)}
						</div>
					</li>
					<li className="item">
						<span className="item-title">GitHub</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的 GitHub" />
							{getBtn(editFlag)}
						</div>
					</li>
				</ul>
			</div>
		</Wrapper>
	)
}

export default Profile
