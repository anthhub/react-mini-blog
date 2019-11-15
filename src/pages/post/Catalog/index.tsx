import React from 'react'

import { ArticleEntity } from '@/modal/entities/article.entity'
import { Wrapper } from './style'
import { Anchor } from 'antd'
const { Link } = Anchor

// // 根据 article 来生成锚点列表
// function getAnchorList(str: any) {
// 	const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
// 	const list: any[] = []
// 	function pushItem(arr: any, item: any) {
// 		const len = arr.length
// 		const matchItem = arr[len - 1]
// 		if (matchItem && matchItem.tag !== item.tag) {
// 			pushItem(matchItem.children, item)
// 		} else {
// 			arr.push(item)
// 			// debugger
// 		}
// 	}
// 	str.replace(pattern, ($0: any, $1: any) => {
// 		const title = $0.replace(/.*?>/, '')
// 		const startIndex = $0.indexOf('"')
// 		const endIndex = $0.indexOf('">')

// 		const href = `#${$0.slice(startIndex + 1, endIndex)}`
// 		const currentItem = {
// 			tag: $1, // 标签类型
// 			title,
// 			href,
// 			children: []
// 		}
// 		pushItem(list, currentItem)
// 	})
// 	return list
// }

// interface IProps extends ArticleEntity {}

// const Catalog: React.FC<IProps> = ({ content }) => {
// 	// 根据content生成锚点列表
// 	const list = getAnchorList(content)
// 	// 把锚点列表中的每项转成链接
// 	function renderLink({ href, title, children }) {
// 		return (
// 			<Link key={href} href={href} title={title}>
// 				{children.length > 0 && children.map((sub: any) => renderLink(sub))}
// 			</Link>
// 		)
// 	}

// 	return (
// 		<Wrapper>
// 			<Anchor affix={false}>{list.map(renderLink)}</Anchor>
// 		</Wrapper>
// 	)
// }

// export default Catalog

interface IProps extends ArticleEntity {}
const Catalog: React.FC<IProps> = ({ content }) => {
	return <Wrapper>{/*
    拿到文章
    找到標題 hn
    給標題添加id
    按順序生成鏈接目錄（點擊后跳到對應id）
    標題要分級
    */}</Wrapper>
}

export default Catalog
