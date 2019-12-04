import React, { useCallback } from 'react'

import { translateMarkdown } from '@/lib/utils/markdown'
import { ArticleEntity } from '@/modal/entities/article.entity'

import { Wrapper } from './style'
import { useIsLogin, useSelector } from '@/redux/context'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const formatDate = (milliseconds: number) => {
	const data = new Date(milliseconds)
	const year = data.getFullYear()
	const month = data.getMonth() + 1
	const day = data.getDate()
	return year + '年' + month + '月' + day + '日'
}

interface IProps extends ArticleEntity {
	// user: { avatarLarge: string }
}

const Comment: React.FC<IProps> = ({
	create_at,
	content,
	title,
	html,
	screenshot,
	id,
	viewCount,
	user: { avatarLarge = '', id: userId, username: author } = {}
}) => {
	console.log(author, '333')
	// console.log('/editor/' + id, { content }, '333')

	const isLogin = useIsLogin()
	// 登录用户的用户名
	const { user: { username } } = useSelector()
	const history = useHistory()
	const onReedit = useCallback(
		async () => {
			history.push('/editor/' + id)
		},
		[ id ]
	)
	const isFollow = true
	return (
		<Wrapper>
			<div className="title">评论</div>
			<div className="">1</div>
			<div className="">1</div>
			<div className="">1</div>
		</Wrapper>
	)
}

export default Comment
