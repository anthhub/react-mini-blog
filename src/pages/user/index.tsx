import { getArticle } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/lib/hooks/useFetch'
import { BackTop } from 'antd'
import React from 'react'
import { useParams } from 'react-router'
import { Wrapper } from './style'
import { useSelector } from '@/redux/context'
import InfoBlock from './InfoBlock'
import ListBlock from './ListBlock'
import StatBlock from './StatBlock'
import FallowBlock from './FallowBlock'
import MoreBLock from './MoreBLock'

const User: React.FC = (props) => {
	const { id = '' } = useParams()

	const { articleList = [] } = useSelector()

	// 从 store 中的文章列表中找到 url 中 id 对应的文章
	const article = articleList.find((item) => id === item.id) || {}

	const { data = article } = useFetch(() => getArticle(id))

	const item: ArticleEntity = data
	// && data[0]

	console.log(data, '444')

	return (
		<Wrapper>
			<div className="left">
				<InfoBlock {...item} />
				<ListBlock {...item}/>
			</div>
			<div className="right">
				<div className="sticky-wrap">
					<StatBlock {...item} />
					<FallowBlock {...item} />
					<MoreBLock {...item} />
				</div>
			</div>
			<BackTop />
		</Wrapper>
	)
}

export default User
