// 引入样式
import '../../../node_modules/codemirror/lib/codemirror.css'
import '../../../node_modules/codemirror/theme/eclipse.css'
import 'codemirror/mode/markdown/markdown'

import { Input, message } from 'antd'
import { Editor, EditorChange, ScrollInfo } from 'codemirror'
import { async } from 'q'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import { useParams } from 'react-router'

import { getArticle } from '@/Api/article'
import { uploadFile } from '@/Api/file'
import useAuthLogin from '@/lib/hooks/useAuthLogin'
import useFetch from '@/lib/hooks/useFetch'
import useInputEvent from '@/lib/hooks/useInputEvent'
// 引入CodeMirror样式
import { translateMarkdown } from '@/lib/utils/markdown'
import { useDispatch, useSelector } from '@/redux/context'

import Menu from './Menu'
import Publish from './Publish'
import { Wrapper } from './style'

const EditMarkdown: React.FC = () => {
  useAuthLogin()
  // 拿到 url 中的 id
  const { id = '' } = useParams()

  const { articleList = [] } = useSelector()

  // 从 store 中的文章列表中找到 url 中 id 对应的文章
  const article = articleList.find(item => id === item.id) || {}
  // 从服务器中拿 默认值是 store 中的数据
  const [data, setData] = useState(article)

  const contentRef = useRef<HTMLDivElement>(null)

  const { value: title, onInputEvent, setValue } = useInputEvent(data.title || '')

  const [content, setContent] = useState({ markdown: data.content || '', html: data.html || '' })

  useEffect(() => {
    if (id) {
      getArticle(id).then(data => {
        setData(data)
        setValue(data.title || '')
        setContent({ markdown: data.content || '', html: data.html || '' })
      })
    }
  }, [id])

  // 内容变化回调
  const onContentChange = useCallback(
    (editor: Editor, data: EditorChange, value: string) => {
      const html = translateMarkdown(value)
      setContent({ markdown: value, html })
      contentRef.current!.innerHTML = html
    },
    [content]
  )

  // 监听左右侧上下滑动
  const onEditorScroll = useCallback((editor: Editor, scrollInfo: ScrollInfo) => {
    contentRef.current!.scrollTo(0, Math.round((scrollInfo.top / scrollInfo.height) * (contentRef.current!.scrollHeight + contentRef.current!.clientHeight)))
  }, [])

  // 文章添加图片
  const dispatch = useDispatch()
  // console.log(article, data, data.screenshot, '==ss==')

  const onUpload = useCallback(async (e: any) => {
    // debugger
    const formData = new FormData()
    const file = e.target.files[0]
    // console.log(file)
    // 上传文件不大于 3M
    if (file.size > 3 * Math.pow(1024, 2)) {
      return message.warning('图片文件过大，最大支持 3 MB')
    }
    formData.append('file', file)
    // 上传文件并拿到 url
    const { url } = await uploadFile(formData)
    setData((data: any) => ({ ...data, screenshot: url }))
    // console.log(url, data.screenshot, '==url==')
    // dispatch({
    // 	type: 'UPDATE_ARTICLE',
    // 	payload: {id,screenshot:url}
    // })
    // console.log(url, data.screenshot, '==url==')
  }, [])

  return (
    <Wrapper>
      <div className={'articleEdit'}>
        {/* 1.topBar 顶部：标题及菜单 */}
        <div className={'topBar'}>
          <Input className={'title'} placeholder="输入文章标题..." value={title} onChange={onInputEvent} />
          <div className="right-box">
            <div className="with-padding upload-img">
              <i
                className="cover-img"
                title="添加封面大图"
                style={{
                  background:
                    "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjI4cHgiIGhlaWdodD0iMjhweCIgdmlld0JveD0iMCAwIDI4IDI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMy44LjMgKDI5ODAyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT42OTlFRDExRS03RjE2LTQwQTUtODlERC1DOUFERTMwQ0NCNEM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIHNrZXRjaHRvb2wuPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IjAuMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ik1hcmtkb3du77yN57yW6L6RMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNDcuMDAwMDAwLCAtMTguMDAwMDAwKSIgZmlsbD0iI0JGQzZDRSI+CiAgICAgICAgICAgIDxnIGlkPSJoZWRlcl9pbWciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNDcuMDAwMDAwLCAxOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01LDcgTDI0LDcgTDI0LDIxIEw1LDIxIEw1LDcgWiBNNiw4IEwyMyw4IEwyMywxNSBMNiwxNSBMNiw4IFogTTksMTEgQzkuNTUyMjg0NzUsMTEgMTAsMTAuNTUyMjg0NyAxMCwxMCBDMTAsOS40NDc3MTUyNSA5LjU1MjI4NDc1LDkgOSw5IEM4LjQ0NzcxNTI1LDkgOCw5LjQ0NzcxNTI1IDgsMTAgQzgsMTAuNTUyMjg0NyA4LjQ0NzcxNTI1LDExIDksMTEgWiBNMjIsMTQgTDEwLDE0IEwxNC4yNTcwOTkxLDEwLjgwNzgxMDEgTDE1Ljc3ODAyNiwxMS44MzM4NzEyIEwxOS4yMzQ2NzgyLDguOTgzNzAxNjIgTDIyLDExLjAxNTA5NTIgTDIyLDE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+') no-repeat center/contain",
                }}
              />
              {/* 实际被点击的是 input，input 隐形覆盖在 button 之上 */}
              <input type="file" accept="image/*" className="img-selector" title="添加封面大图" onChange={onUpload} />
            </div>
            <Publish content={content} title={title} type={data.type} id={id} screenshot={data.screenshot} />
            <Menu />
          </div>
        </div>

        {/* 2.main markdown 编辑器和 html 预览 */}
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
                  lineWrapping: true,
                }}
                onChange={onContentChange}
                onScroll={onEditorScroll}
              />
            </div>
            <div className={'footer'}>
              <button className="upload-img-btn" title="点击上传图片">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE5cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE5IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IHNrZXRjaHRvb2wgMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPjc3NkNFMTBCLUM5MzQtNEEyNy1BNUQ2LUI4NzI1RTBBMzY2NzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTWFya2Rvd27vvI3lhajlsY/mqKHlvI/jgIHnmb3oibLpo47moLwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4wMDAwMDAsIC04NzMuMDAwMDAwKSIgZmlsbD0iI0IzQkFDMSI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik01Miw4NzQuNDk4MjQ1IEM1Miw4NzMuNjcwNzg3IDUyLjY3NjIyMDEsODczIDUzLjQ5MDg5ODEsODczIEw2OS41MDkxMDE5LDg3MyBDNzAuMzMyNTAyMiw4NzMgNzEsODczLjY3NTI0OSA3MSw4NzQuNDk4MjQ1IEw3MSw4ODUuNTAxNzU1IEM3MSw4ODYuMzI5MjEzIDcwLjMyMzc3OTksODg3IDY5LjUwOTEwMTksODg3IEw1My40OTA4OTgxLDg4NyBDNTIuNjY3NDk3OCw4ODcgNTIsODg2LjMyNDc1MSA1Miw4ODUuNTAxNzU1IEw1Miw4NzQuNDk4MjQ1IFogTTY5LjAxMDM0OTMsODg0LjAwMDE5MyBDNjkuMDEwMzQ5Myw4ODQuNTUyMzcxIDY4LjU2MTExOTMsODg1IDY4LjAwMjE3MDIsODg1IEw1NCw4ODUgTDU5LDg4MCBMNjEsODgyIEw2Niw4NzcgTDY5LjAxMDM0OTMsODgwIEw2OS4wMTAzNDkzLDg4NC4wMDAxOTMgWiBNNTYuNSw4NzggQzU3LjMyODQyNzEsODc4IDU4LDg3Ny4zMjg0MjcgNTgsODc2LjUgQzU4LDg3NS42NzE1NzMgNTcuMzI4NDI3MSw4NzUgNTYuNSw4NzUgQzU1LjY3MTU3MjksODc1IDU1LDg3NS42NzE1NzMgNTUsODc2LjUgQzU1LDg3Ny4zMjg0MjcgNTUuNjcxNTcyOSw4NzggNTYuNSw4NzggWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
              </button>
              {/* 实际被点击的是 input，input 隐形覆盖在 button 之上 */}
              <input type="file" accept="image/*" className="img-selector" title="点击上传图片" onChange={onUpload} />
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
