import React from 'react';
// import { connect } from 'react-redux';
import { Wrapper } from './style';

const Article:React.FC = (props) => {
	return (
		<Wrapper>
			<li>
				<a>
					<section className="content">
						<div className="info-box">
							<div>
								<ul className="info-row">
									<li className="column info-item">专栏</li>
									<li className="info-item">
										<a className="user-link">前端小智</a>
									</li>
									<li className="info-item">3小时前</li>
									<li className="">
										<a className="tag-link">JavaScript</a>
									</li>
								</ul>
							</div>

							<div className="title">
								<a className="title-link" href="#">
									重温一下 JS 进阶需要掌握的 13 个概念
								</a>
							</div>

							<div>
								<ul className="info-row">
									<li>
										<a className="little-box like">
											<img
												className="icon"
												src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg"
											/>
											<span className="count">27</span>
										</a>
									</li>
									<li>
										<a className="little-box comment">
											<img
												className="icon"
												src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg"
											/>
											<span className="count">7</span>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="thumb"
							style={{
								background:
									"url('https://user-gold-cdn.xitu.io/2019/10/22/16df35a0088d731e?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1') no-repeat center/cover"
							}}
						/>
					</section>
				</a>
			</li>
		</Wrapper>
	);
};

export default Article;
