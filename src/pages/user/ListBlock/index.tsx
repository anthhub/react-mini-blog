import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { Wrapper } from './style'
import ListHeader from '../ListHeader'
import ListBodyPosts from '../ListBodyPosts'
import ListBodyLikes from '../ListBodyLikes'
import ListBodyFollow from '../ListBodyFollow'

// interface IProps {
// 	user: {
// 		username: string
// 		jobTitle: string
// 		company: string
// 	}
// }

// const ListBlock: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '' } = {} }) => {
const ListBlock: React.FC = (props) => {
	const { item = '' } = useParams()
	// console.log(item, 'lalala')

	return (
		<Wrapper>
			<ListHeader />
			{item === 'following' || item === 'followers' ? (
				<ListBodyPosts />
			) : item === 'likes' ? (
				<ListBodyLikes />
			) : (
				<ListBodyFollow />
			)}
		</Wrapper>
	)
}

export default ListBlock
