// 从 Profile 复制来的 第一版暂时没有修改密码功能

import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

// 是否处于被编辑状态
const editStatus: boolean = true;
// const editStatus: boolean = false;

const getBtn = (status: boolean) => {
	return status ? (
		<div className="edit-box">
			<button className="confirm-btn">保存</button>
			<button className="cancel-btn">取消</button>
		</div>
	) : (
		<div className="edit-box">
			<button className="edit-btn">
				<i className="edit-icon" />
				<span>修改</span>
			</button>
		</div>
	);
};

const Password: React.FC = (props) => {
	return (
		<Wrapper>
			<div>
				Password
				<h1 className="title">个人资料</h1>
				<ul className="setting-list">
					<li className="item">
						<span className="item-title">头像</span>
						<div className="avatar-uploader">
							<div className="avatar" />
							<div className="upload">
								<div className="hint">支持 jpg、png 格式大小 5M 以内的图片</div>
								<button className="upload-btn">点击上传</button>
							</div>
						</div>
					</li>
					<li className="item">
						<span className="item-title">用户名</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的用户名" />
							{getBtn(editStatus)}
						</div>
					</li>
					<li className="item">
						<span className="item-title">邮箱</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的邮箱" />
							{getBtn(editStatus)}
						</div>
					</li>
					<li className="item">
						<span className="item-title">GitHub</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的 GitHub" />
							{getBtn(editStatus)}
						</div>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

export default Password;
