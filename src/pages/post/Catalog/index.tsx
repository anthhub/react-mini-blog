import React, { useCallback } from 'react'

import { ArticleEntity } from '@/modal/entities/article.entity'
import { Wrapper } from './style'
import { Anchor } from 'antd'
import { translateMarkdown } from '@/lib/utils/markdown'
const { Link } = Anchor

function matchReg(str: string) {
	let reg = /<\/?.+?\/?>/g
	return str.replace(reg, '')
}

// 根据 article 来生成锚点列表
function getAnchorList(str: any = '') {
	// console.log(str, '111')
	const pattern = /<(h[1-6])[\s\S]+?(?=<\/\1>)/g
	const list: any[] = []
	function pushItem(arr: any, item: any) {
		const len = arr.length
		const matchItem = arr[len - 1]
		if (matchItem && matchItem.tag !== item.tag) {
			pushItem(matchItem.children, item)
		} else {
			arr.push(item)
			// debugger
		}
	}
	str.replace(pattern, ($0: any, $1: any) => {
		const title = matchReg($0.replace(/.*?>/, '') || '')
		const startIndex = $0.indexOf('"')
		const endIndex = $0.indexOf('">')

		const href = `#${$0.slice(startIndex + 1, endIndex)}`
		const currentItem = {
			tag: $1, // 标签类型
			title,
			href,
			children: []
		}
		pushItem(list, currentItem)
	})
	return list
}

interface IProps extends ArticleEntity {}

const Catalog: React.FC<IProps> = ({ html, content }) => {
	// 根据content生成锚点列表
	const list = getAnchorList(html || translateMarkdown(content || ''))
	// console.log(list, '222')

	// 把锚点列表中的每项转成链接
	const renderLink = useCallback(({ href, title, children }: { href: string; title: string; children: any[] }) => {
		return (
			<Link key={href} href={href} title={title}>
				{children.length > 0 && children.map((sub: any) => renderLink(sub))}
			</Link>
		)
	}, [])

	return (
		<Wrapper>
			{/* offsetTop 是目录列表距窗口顶部距离，targetOffset 是锚点距窗口顶部距离 */}
			<Anchor offsetTop={86} targetOffset={60} style={list.length === 0 ? { display: 'none' } : {}}>
				<div className="catalog-title">目录</div>
				<div className="catalog-body">{list.map(renderLink)}</div>
			</Anchor>
		</Wrapper>
	)
}

export default Catalog

// const getAnchorList = (content: string) => {
// 	let titleList: any[] = []
// 	const h2s = document.getElementsByTagName('h2')
// 	console.log({ h2s })

// 	for (let i = 0; i < h2s.length; i++) {
// 		h2s[i].setAttribute('id', Math.random() + '0')
// 		titleList.push(h2s[i])
// 		console.log(h2s[i])
// 		console.log({ titleList })
// 	}
// 	return titleList
// }

// interface IProps extends ArticleEntity {}
// const Catalog: React.FC<IProps> = ({ content }) => {
// 	const titleList = getAnchorList(content)
// 	return (
// 		<Wrapper>
// 			<Anchor>{titleList.map((item) => <Link href={'#' + item.id} title="123" key={item.id} />)}</Anchor>

{
	/*
    拿到文章
    找到標題 hn 标题树
    給標題添加id
    按順序生成鏈接目錄（點擊后跳到對應id）
    標題要分級
    */
}
// 		</Wrapper>
// 	)
// }

// export default Catalog
