import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

// const editStatus: boolean = true;
const editStatus: boolean = false;
const Main: React.FC = (props) => {
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
							</div>
						</div>
					</li>
					<li className="item">
						<span className="item-title">用户名</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的用户名" />
							{editStatus ? (
								<div className="edit-box">
									<button className="edit-btn">
										<i className="edit-icon" />
										<span>修改</span>
									</button>
								</div>
							) : (
								<div className="edit-box">
									<button className="confirm-btn">保存</button>
									<button className="cancel-btn">取消</button>
								</div>
							)}
						</div>
					</li>
					<li className="item">
						<span className="item-title">邮箱</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的邮箱" />
							{editStatus ? (
								<div className="edit-box">
									<button className="edit-btn">
										<i className="edit-icon" />
										<span>修改</span>
									</button>
								</div>
							) : (
								<div className="edit-box">
									<button className="confirm-btn">保存</button>
									<button className="cancel-btn">取消</button>
								</div>
							)}
						</div>
					</li>
					<li className="item">
						<span className="item-title">GitHub</span>
						<div className="input-box">
							<input className="input" placeholder="填写你的 GitHub" />
							{editStatus ? (
								<div className="edit-box">
									<button className="edit-btn">
										<i className="edit-icon" />
										<span>修改</span>
									</button>
								</div>
							) : (
								<div className="edit-box">
									<button className="confirm-btn">保存</button>
									<button className="cancel-btn">取消</button>
								</div>
							)}
						</div>
					</li>
				</ul>
			</div>
		</Wrapper>
	);
};

export default Main;
