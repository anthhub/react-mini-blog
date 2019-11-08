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
import arrowIcon from '../../../statics/arrow-down.svg'
import avatarPic from '../../../statics/avatar.png'
import { useDispatch } from '@/redux/context'

const Publish: React.FC = () => {
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
		console.log('%c%s', 'color: #20bd08; font-size:15px', '===TQY===: onEditorScroll -> scrollInfo', scrollInfo)
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
	// const [ showDropdown, setDropdown ] = useState(false)

	// const hideDropdown = useCallback((e: any) => {
	// 	console.log(e, { showDropdown })
	// 	setDropdown(false)
	// }, [])

	// useEffect(() => {
	// 	document.addEventListener('click', hideDropdown)
	// 	return () => {
	// 		document.removeEventListener('click', hideDropdown)
	// 	}
	// }, [])

	// 发布文章面板显隐
	const [ showPublish, setPublish ] = useState(false)

	const hidePublish = useCallback(
		(e: any) => {
			console.log('自定义', e.target.className, { showPublish })
			if (
				![
					'publish',
					'publish-title',
					'arrow-down',
					'panel',
					'panel-title',
					'tag-box',
					'sub-title',
					'tag-list',
					'item',
					'publish-btn'
				].includes(e.target.className) ||
				(showPublish && [ 'publish', 'publish-title', 'arrow-down' ].includes(e.target.className))
			) {
				console.log(222222222222222222)

				setPublish(false)
			}
		},
		[ showPublish ]
	)

	useEffect(() => {
		document.addEventListener('click', hidePublish)
		return () => {
			document.removeEventListener('click', hidePublish)
		}
	}, [])

	// 登出确定框
	const dispatch = useDispatch()

	const confirmLogout = () => {
		if (window.confirm('确定登出吗？每一片贫瘠的土地都需要坚定的挖掘者！')) {
			dispatch({ type: 'LOGOUT' })
		}
	}

	const tagList = [ '后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读' ]

	const [ activeList, setActiveList ] = useState<string[]>([])

	const changeActiveList = useCallback(
		(e: any, item: string) => {
			e.nativeEvent.stopImmediatePropagation()
			if (activeList.includes(item)) {
				const tmp = [ ...activeList ]
				tmp.splice(activeList.indexOf(item), 1)
				setActiveList(tmp)
			} else {
				setActiveList([ ...activeList, item ])
			}
		},
		[ activeList ]
	)

	return (
		<Wrapper>
			<div className="with-padding">
				<div
					className="publish"
					onClick={(e) => {
						// e.nativeEvent.stopImmediatePropagation()
						if (showPublish) {
							setPublish(false)
						} else {
							setPublish(true)
						}
						// console.log('合成', { showPublish })
					}}
				>
					<span className="publish-title">发布</span>
					<i
						className="arrow-down"
						style={{
							background: `url(${arrowIcon}) no-repeat center/contain`,
							backgroundSize: '85%'
						}}
					/>
				</div>

				{showPublish && (
					<div className="panel">
						<div className="panel-title">发布文章</div>
						<div className="tag-box">
							<div className="sub-title">标签</div>
							<ul className="tag-list">
								{tagList.map((item) => (
									<li
										onClick={(e) => changeActiveList(e, item)}
										className={activeList.includes(item) ? 'item active' : 'item'}
										key={item}
									>
										{item}
									</li>
								))}
							</ul>
						</div>
						<button className="publish-btn" onClick={onSave}>
							确定并发布
						</button>
					</div>
				)}
			</div>
		</Wrapper>
	)
}

export default Publish

/*
問題：
再次點擊 發佈 不隱藏
點擊頭像 不出現下拉菜單
*/
