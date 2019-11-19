import { ArticleEntity } from '@/modal/entities/article.entity'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

interface IProps extends ArticleEntity {}

const Article: React.FC<IProps> = ({ title, update_at, author, type, screenshot, id }) => {
	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: screenshot', screenshot)
	console.log({ update_at }, typeof update_at)

	// const formatDate=(update_at)=>{
	//   if update_at
	/*
	
	const dt = new Date()
	const msNow = dt.getTime()

	然后把 update_at 转为毫秒 相减得到 diff
	if(diff>1年毫秒数){
		return Math.floor(diff/每年毫秒数31536000000)+'年前'
	}else if(1月<diff<1年) {
		return Math.floor(diff/每月毫秒数 2592000000)+'月前'
	}else if(1天<diff<1月) {
		return Math.floor(diff/每天毫秒数 86400000)+'月前'
	}else if(1小时<diff<1天) {
		return Math.floor(diff/每小时毫秒数 3600000)+'月前'
	}else if(1分钟<diff<1小时) {
		return Math.floor(diff/分钟毫秒数 60000)+'月前'
	}else{
		return "刚刚"
	}

	
	*/

	// }

	return (
		<Wrapper screenshot={screenshot}>
			<li>
				<Link to={`/post/${id}`}>
					<section className="content">
						<div className="info-box">
							<div>
								<ul className="info-row">
									<li className="column info-item">专栏</li>
									<li className="info-item">
										<a className="user-link">{author}</a>
									</li>
									<li className="info-item">{update_at}</li>
									<li className="">
										<a className="tag-link">{type}</a>
									</li>
								</ul>
							</div>

							<div className="title">
								<div className="title-link">{title}</div>
							</div>

							{/* <div>
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
							</div> */}
						</div>

						<div className="thumb" />
					</section>
				</Link>
			</li>
		</Wrapper>
	)
}

export default memo(Article)
