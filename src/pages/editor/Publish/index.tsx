import { Input } from 'antd'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

// 引入样式
import { Wrapper } from './style'

// 引入CodeMirror样式
import { createArticle } from '@/Api/article'
import 'codemirror/mode/markdown/markdown'
import arrowIcon from '../../../statics/arrow-down.svg'
import { useDispatch } from '@/redux/context'

const Publish: React.FC = () => {
	const contentRef = useRef<HTMLDivElement>(null)

	const [ content, setContent ] = useState({ markdown: '', html: '' })

	const onSave = useCallback(
		() => {
			console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onSave -> data', content)
			const data = createArticle({
				author: '测试创建c',
				content: content.markdown,
				html: content.html,
				title: '测试创建 标题',
				screenshot: 'https://imgphoto.gmw.cn/attachement/jpg/site2/20191103/f44d3075890f1f28a06e01.JPG',
				type: '测试创建 js'
			})
		},
		[ content ]
	)

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


