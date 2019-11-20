import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { getArticles } from '@/Api/article'
import useFetch from '@/lib/hooks/useFetch'
import useQuery from '@/lib/hooks/useQuery'
import { ArticleEntity } from '@/modal/entities/article.entity'
import { useIsLogin } from '@/redux/context'

import Article from '../Article'
import { Wrapper } from './style'

const ArticleList: React.FC = () => {
	// search 是地址栏 ? 开始的内容
	// query 是 ? 之后内容拆成的对象
	// const { query }: any = useQuery()
	// console.log(query)
	const { setQuery, query } = useQuery()

	const { data } = useFetch(() => getArticles(query), [ query ])

	// 文章列表
	const list = (data && data.edges) || []

	// 所有 or 我的
	// const [ active, setActive ] = useState(0)

	// 是否登陆
	const isLogin = useIsLogin()

	return (
		<Wrapper>
			<header className="header">
				<nav className="nav">
					<ul className="nav-list">
						<li
							className={query.own === 'all' || !query.own ? 'nav-item active' : 'nav-item'}
							onClick={() => setQuery({ own: 'all' })}
						>
							全部
						</li>

						{isLogin && (
							<li
								className={query.own === 'mine' ? 'nav-item mine active' : 'nav-item mine'}
								onClick={() => setQuery({ own: 'mine' })}
							>
								我的
							</li>
						)}
					</ul>
				</nav>
			</header>

			<ul>{list.map((item: ArticleEntity) => <Article {...item} key={item.id} />)}</ul>
		</Wrapper>
	)
}

export default ArticleList

/*

添加 预览图片功能 包括设置页 写文章页 
设置页拿到用户信息 修改
修改失败提醒
添加小程序小图标
小程序登陆功能 搜索功能
登陆失败提醒
一些index拆分成小组件
目录不显示
目录样式修改
编辑器文字 滚动条样式
加一行预览
发布不了很长的文章 状态码500
标题有误（跟html markdown 有关吗 有关吧！！
预览窗口的宽度
*/
