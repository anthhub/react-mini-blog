// 详情页 右侧 作者简介卡片

import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

const Author: React.FC = (props) => {
	return (
		<Wrapper>
			<header className="author-title">关于作者</header>
			<div className="author-info">
				<a className="author-desc">
					<div
						className="avatar"
						style={{
							background:
								"url('https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1') no-repeat center/cover"
						}}
					/>
					<div className="info">
						<span className="author-name">shanyue</span>
						<span className="author-intro">程序员 | 公众号: 山月行</span>
					</div>
				</a>
				<div className="agree">
					<span>获得点赞</span>
					<span className='count'>7,113</span>
				</div>
				<div className="views">
					<span>文章被阅读</span>
					<span className='count'>179,331</span>
				</div>
			</div>
		</Wrapper>
	);
};

export default Author;
