import { Input } from 'antd'
import React, { useRef, useState, useCallback } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

// 引入样式
import '../../../node_modules/codemirror/lib/codemirror.css'
import '../../../node_modules/codemirror/theme/eclipse.css'
import { Wrapper } from './style'

// 引入CodeMirror样式
import { translateMarkdown } from '@/lib/utils/markdown'
import { Editor, EditorChange, ScrollInfo } from 'codemirror'
import 'codemirror/mode/markdown/markdown'

import Publish from './Publish'
import Menu from './Menu'
import useInputEvent from '@/hooks/useInputEvent'

const EditMarkdown: React.FC = () => {
	const contentRef = useRef<HTMLDivElement>(null)

	const { value: title, onInputEvent } = useInputEvent('')

	const [ content, setContent ] = useState({ markdown: '', html: '' })

	// 内容变化回调
	const onContentChange = useCallback(
		(editor: Editor, data: EditorChange, value: string) => {
			console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onContentChange -> data', data, value)
			const html = translateMarkdown(value)
			setContent({ markdown: value, html })
			contentRef.current!.innerHTML = html
		},
		[ content ]
	)

	// 监听左右侧上下滑动
	const onEditorScroll = useCallback((editor: Editor, scrollInfo: ScrollInfo) => {
		console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onEditorScroll -> scrollInfo', scrollInfo)
		contentRef.current!.scrollTo(
			0,
			Math.round(
				scrollInfo.top /
					scrollInfo.height *
					(contentRef.current!.scrollHeight + contentRef.current!.clientHeight)
			)
		)
	}, [])

	return (
		<Wrapper>
			<div className={'articleEdit'}>
				{/* 1.topBar */}
				<div className={'topBar'}>
					<Input className={'title'} placeholder="输入文章标题..." value={title} onChange={onInputEvent} />
					<div className="right-box">
						<div className="with-padding upload-img">
							<i
								className="cover-img"
								title="添加封面大图"
								style={{
									background:
										"url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI4cHgiIGhlaWdodD0iMjhweCIgdmlld0JveD0iMCAwIDI4IDI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy44LjMgKDI5ODAyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT42OTlFRDExRS03RjE2LTQwQTUtODlERC1DOUFERTMwQ0NCNEM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IjAuMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1hcmtkb3du77yN57yW6L6RMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNDcuMDAwMDAwLCAtMTguMDAwMDAwKSIgZmlsbD0iI0JGQzZDRSI+CiAgICAgICAgICAgIDxnIGlkPSJoZWRlcl9pbWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNDcuMDAwMDAwLCAxOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LDcgTDI0LDcgTDI0LDIxIEw1LDIxIEw1LDcgWiBNNiw4IEwyMyw4IEwyMywxNSBMNiwxNSBMNiw4IFogTTksMTEgQzkuNTUyMjg0NzUsMTEgMTAsMTAuNTUyMjg0NyAxMCwxMCBDMTAsOS40NDc3MTUyNSA5LjU1MjI4NDc1LDkgOSw5IEM4LjQ0NzcxNTI1LDkgOCw5LjQ0NzcxNTI1IDgsMTAgQzgsMTAuNTUyMjg0NyA4LjQ0NzcxNTI1LDExIDksMTEgWiBNMjIsMTQgTDEwLDE0IEwxNC4yNTcwOTkxLDEwLjgwNzgxMDEgTDE1Ljc3ODAyNiwxMS44MzM4NzEyIEwxOS4yMzQ2NzgyLDguOTgzNzAxNjIgTDIyLDExLjAxNTA5NTIgTDIyLDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+') no-repeat center/contain"
								}}
							/>
							<input type="file" accept="image/*" className="img-selector" title="添加封面大图" />
						</div>
						<Publish content={content} title={title} />
						<Menu />
					</div>
				</div>

				{/* 2.main */}
				<div className={'main'}>
					<div className={'editor'}>
						<div className={'markdown'}>
							<CodeMirror
								value={content.markdown}
								className={'codeMirror'}
								options={{
									mode: 'markdown',
									theme: 'eclipse',
									lineNumbers: false,
									smartIndent: true,
									lineWrapping: true
								}}
								onChange={onContentChange}
								onScroll={onEditorScroll}
							/>
						</div>
						<div className={'footer'}>
							<button className="upload-img-btn" title="点击上传图片">
								<img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE5IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPjc3NkNFMTBCLUM5MzQtNEEyNy1BNUQ2LUI4NzI1RTBBMzY2NzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTWFya2Rvd27vvI3lhajlsY/mqKHlvI/jgIHnmb3oibLpo47moLwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4wMDAwMDAsIC04NzMuMDAwMDAwKSIgZmlsbD0iI0IzQkFDMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01Miw4NzQuNDk4MjQ1IEM1Miw4NzMuNjcwNzg3IDUyLjY3NjIyMDEsODczIDUzLjQ5MDg5ODEsODczIEw2OS41MDkxMDE5LDg3MyBDNzAuMzMyNTAyMiw4NzMgNzEsODczLjY3NTI0OSA3MSw4NzQuNDk4MjQ1IEw3MSw4ODUuNTAxNzU1IEM3MSw4ODYuMzI5MjEzIDcwLjMyMzc3OTksODg3IDY5LjUwOTEwMTksODg3IEw1My40OTA4OTgxLDg4NyBDNTIuNjY3NDk3OCw4ODcgNTIsODg2LjMyNDc1MSA1Miw4ODUuNTAxNzU1IEw1Miw4NzQuNDk4MjQ1IFogTTY5LjAxMDM0OTMsODg0LjAwMDE5MyBDNjkuMDEwMzQ5Myw4ODQuNTUyMzcxIDY4LjU2MTExOTMsODg1IDY4LjAwMjE3MDIsODg1IEw1NCw4ODUgTDU5LDg4MCBMNjEsODgyIEw2Niw4NzcgTDY5LjAxMDM0OTMsODgwIEw2OS4wMTAzNDkzLDg4NC4wMDAxOTMgWiBNNTYuNSw4NzggQzU3LjMyODQyNzEsODc4IDU4LDg3Ny4zMjg0MjcgNTgsODc2LjUgQzU4LDg3NS42NzE1NzMgNTcuMzI4NDI3MSw4NzUgNTYuNSw4NzUgQzU1LjY3MTU3MjksODc1IDU1LDg3NS42NzE1NzMgNTUsODc2LjUgQzU1LDg3Ny4zMjg0MjcgNTUuNjcxNTcyOSw4NzggNTYuNSw4NzggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
							</button>
							<input type="file" accept="image/*" className="img-selector" title="点击上传图片" />
						</div>
					</div>

					<div id="preview" className={'preview'}>
						<div ref={contentRef} className={'content'} />
						<div className={'footer'}>
							<label className="footer-title">预览</label>
							{/* <label className="word-count">字数</label> */}
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default EditMarkdown

/* 
添加文件
时间格式化
*/
