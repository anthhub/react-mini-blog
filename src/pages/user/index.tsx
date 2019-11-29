import { getArticle } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/lib/hooks/useFetch'
import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import { Wrapper } from './style'
import { useSelector, useDispatch } from '@/redux/context'
import InfoBlock from './InfoBlock'
import ListBlock from './ListBlock'
import StatBlock from './StatBlock'
import FallowBlock from './FallowBlock'
import MoreBLock from './MoreBLock'
import { getUserArticles, getUserInfo } from '@/Api/user'

const User: React.FC = (props) => {
	const { id = '' } = useParams()
	// console.log(id, '=============id===========')

	// 文章列表和作者信息要分开拿
	const { data: info = {} } = useFetch(async () => {
		const userInfo = await getUserInfo(id)
		console.log(userInfo, 'userInfo--------------------')
		return userInfo
	}, [])

	const { data: list = [] } = useFetch(async () => {
		const rs = await getUserArticles(id)
		// console.log(rs, 'rs--------------------')
		const list = (rs && rs.edges) || []
		// console.log(list, 'list--------------------')
		return list
	}, [])

	return (
		<Wrapper>
			<div className="left">
				<InfoBlock user={info} />
				{/* <ListBlock list={data} /> */}
			</div>
			<div className="right">
				<div className="sticky-wrap">
					<StatBlock />
					<FallowBlock id={info.id} />
					<MoreBLock user={info} />
				</div>
			</div>
			<BackTop />
		</Wrapper>
	)
}

export default User
