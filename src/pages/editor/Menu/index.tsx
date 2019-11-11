import { Input } from 'antd'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

// 引入样式
import { Wrapper } from './style'

// 引入CodeMirror样式
import { createArticle } from '@/Api/article'
import { translateMarkdown } from '@/lib/utils/markdown'
import { Editor, EditorChange, ScrollInfo } from 'codemirror'
import 'codemirror/mode/markdown/markdown'
import avatarPic from '../../../statics/avatar.png'
import { useDispatch } from '@/redux/context'

const Menu: React.FC = () => {
	const contentRef = useRef<HTMLDivElement>(null)

	const [ content, setContent ] = useState({ markdown: '', html: '' })

	// 内容变化回调
	const onContentChange = (editor: Editor, data: EditorChange, value: string) => {
		console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onContentChange -> data', data, value)
		const html = translateMarkdown(value)
		setContent({ markdown: value, html })
		contentRef.current!.innerHTML = html
	}

	// 监听左右侧上下滑动
	const onEditorScroll = (editor: Editor, scrollInfo: ScrollInfo) => {
		console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onEditorScroll -> scrollInfo', scrollInfo)
		contentRef.current!.scrollTo(
			0,
			Math.round(
				scrollInfo.top /
					scrollInfo.height *
					(contentRef.current!.scrollHeight + contentRef.current!.clientHeight)
			)
		)
	}

	const onSave = () => {
		const data = createArticle({
			author: '测试创建c',
			content: content.markdown,
			html: content.html,
			title: '测试创建 标题',
			screenshot: 'https://imgphoto.gmw.cn/attachement/jpg/site2/20191103/f44d3075890f1f28a06e01.JPG',
			type: '测试创建 js'
		})
		console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onSave -> data', data)
	}

	// 头像下拉菜单显隐
	const [ showDropdown, setDropdown ] = useState(false)

	const hideDropdown = useCallback((e: any) => {

		if(e.target.className !== 'avatar'){
	// console.log(e, { showDropdown })
	setDropdown(false)
		}
	
	}, [])

	useEffect(() => {
		document.addEventListener('click', hideDropdown)
		return () => {
			document.removeEventListener('click', hideDropdown)
		}
	}, [])

	// 发布文章面板显隐
	// const [ showPublish, setPublish ] = useState(false)

	// const hidePublish = useCallback((e: any) => {
	// 	console.log(e, { showPublish })
	// 	setPublish(false)
	// }, [])

	// useEffect(() => {
	// 	document.addEventListener('click', hidePublish)
	// 	return () => {
	// 		document.removeEventListener('click', hidePublish)
	// 	}
	// }, [])

	// 登出确定框
	const dispatch = useDispatch()

	const confirmLogout = () => {
		if (window.confirm('确定登出吗？每一片贫瘠的土地都需要坚定的挖掘者！')) {
			dispatch({ type: 'LOGOUT' })
		}
	}

	return (
		<Wrapper>
			<nav className="with-padding navigation">
				<div
					className="avatar"
					style={{
						background: `url(${avatarPic}) no-repeat center/Contain`
					}}
					onClick={(e) => {
						// e.nativeEvent.stopImmediatePropagation()
						setDropdown(true)
						console.log({ showDropdown })
					}}
				/>
				{showDropdown && (
					<ul className="dropdown-list">
						<li>
							<a className="menu-item" href="/settings">
								<span>设置</span>
							</a>
						</li>
						<li>
							<a className="menu-item" onClick={confirmLogout}>
								<span>登出</span>
							</a>
						</li>
					</ul>
				)}
			</nav>
		</Wrapper>
	)
}

export default Menu

/* 
// 滚动条
标签循环 写死
编辑padding
外部高度
字数
*/
