import { getArticles } from '@/Api/article'
import { ArticleEntity } from '@/modal/entities/article.entity'
import useFetch from '@/hooks/useFetch'
import React, { useState } from 'react'
import Article from '../Article'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import { useIsLogin } from '@/redux/context'
import useQuery from '@/hooks/useQuery'


const ArticleList: React.FC = () => {
	// search 是地址栏 ? 开始的内容
	// query 是 ? 之后内容拆成的对象
	const query: any = useQuery()
	console.log(query)

	const { data } = useFetch(() => getArticles(query), [ query ])
	console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: data')

	// 文章列表
	const list = (data && data.edges) || []

	// 所有 or 我的
	const [ active, setActive ] = useState(0)

	// 是否登陆
	const isLogin = useIsLogin()


	return (
		<Wrapper>
			<header className="header">
				<nav className="nav">
					<ul className="nav-list">
						<li className={active === 0 ? 'nav-item active' : 'nav-item'} onClick={() => setActive(0)}>
							{/* 不跳转 在现在的 url 后添加 search */}
							<Link to={{ pathname: '', search: 'sort=all' }}>全部</Link>
						</li>

						{isLogin && (
							<li
								className={active === 1 ? 'nav-item mine active' : 'nav-item mine'}
								onClick={() => setActive(1)}
							>
								<Link to={{ pathname: '', search: 'sort=mine' }}>我的</Link>
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
添加图片功能 包括设置页 写文章页
设置页拿到用户信息 修改
添加小程序小图标
小程序登陆功能 搜索功能
检查标题不为空
登陆失败提醒
一些index拆分成组件
pathname 搜索框
回车搜索
退出不了
*/
