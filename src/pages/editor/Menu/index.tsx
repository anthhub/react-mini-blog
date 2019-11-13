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
	// 头像下拉菜单显隐
	const [ showDropdown, setDropdown ] = useState(false)

	const hideDropdown = useCallback((e: any) => {
		if (e.target.className !== 'avatar') {
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
