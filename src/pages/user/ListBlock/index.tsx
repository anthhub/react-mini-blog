import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin, useDispatch, useSelector } from '@/redux/context'

import { Wrapper } from './style'
import { async } from 'q'
import { getUserInfo, getUserArticles } from '@/Api/user'
import ListBody from '../ListBody'
import ListHeader from '../ListHeader'

// interface IProps {
// 	user: {
// 		username: string
// 		jobTitle: string
// 		company: string
// 	}
// }

// const ListBlock: React.FC<IProps> = ({ user: { username = '', jobTitle = '', company = '' } = {} }) => {
const ListBlock: React.FC = (props) => {
	return (
		<Wrapper>
			<ListHeader />
			<ListBody />
		</Wrapper>
	)
}

export default ListBlock
