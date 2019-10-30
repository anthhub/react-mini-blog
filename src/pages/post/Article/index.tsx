import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

const data = {};

const Article: React.FC = (props) => {
	return (
		<Wrapper>
			{/* <article className="article"> */}
				<div className="author">
					<div className='author-info'>
						<a>
							<div
								className="avatar"
								style={{
									background:
										"url('https://leancloud-gold-cdn.xitu.io/bdfecd06f90e24f88946.jpeg?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1') no-repeat center/cover"
								}}
							/>
						</a>
						<div>
							<a className="author-name">shanyue</a>
							<div className="article-info">
								<time>2019年10月29日</time>
								<span className="views">阅读 1367</span>
							</div>
						</div>
					</div>
					<button className="follow">关注</button>
				</div>
				<h1 className='article-title'>个人服务器运维指南</h1>
				文章
			{/* </article>
			<div className="tag-list">标签</div>
			<div className="author-footer">底部作者</div>
			<div className="comment-list">评论</div> */}
		</Wrapper>
	);
};

export default Article;
