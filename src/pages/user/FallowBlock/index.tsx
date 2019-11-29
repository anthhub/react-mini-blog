// 详情页 右侧 作者简介卡片

import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
	id: string
}

const FallowBlock: React.FC<IProps> = ({ id }) => {
	// console.log(id, '啦啦啦 id')
	return (
		<Wrapper>
			<Link className="follow-item" to={'/user/' + id + 'following'}>
				<div className="item-title">关注了</div>
				<div className="item-count">50</div>
			</Link>
			<Link className="follow-item" to={'/user/' + id + 'followers'}>
				<div className="item-title">关注者</div>
				<div className="item-count">1</div>
			</Link>
		</Wrapper>
	)
}

export default FallowBlock
