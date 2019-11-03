import { Button, Input } from 'antd'
import React, { useRef, useState } from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

// 引入样式
import './Demo.less'

// 引入CodeMirror样式
import { createArticle } from '@/Api/article'
import useFetch from '@/hooks/useFetch'
import { translateMarkdown } from '@/lib/utils/markdown'
import { Editor, EditorChange, ScrollInfo } from 'codemirror'
import 'codemirror/mode/markdown/markdown'

const Demo: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  const [content, setContent] = useState({ markdown: '', html: '' })

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
    contentRef.current!.scrollTo(0, Math.round((scrollInfo.top / scrollInfo.height) * (contentRef.current!.scrollHeight + contentRef.current!.clientHeight)))
  }

  const onSave = () => {
    const data = createArticle({
      author: '测试创建c',
      content: content.markdown,
      html: content.html,
      title: '测试创建 标题',
      screenshot: 'https://imgphoto.gmw.cn/attachement/jpg/site2/20191103/f44d3075890f1f28a06e01.JPG',
      type: '测试创建 js',
    })
    console.log('%c%s', 'color: #20bd08;font-size:15px', '===TQY===: onSave -> data', data)
  }

  return (
    <div className={'articleEdit'}>
      <div className={'topBar'}>
        <Input className={'title'} placeholder="请输入文章标题" />
        <Button onClick={onSave}>保存 </Button>
      </div>

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
            <label style={{ marginLeft: 20 }}>Markdown编辑器</label>
          </div>
        </div>

        <div id="preview" className={'preview'}>
          <div id="content" className={'content'}>
            <div ref={contentRef} className={'content'} />
          </div>
          <div className={'footer'}>
            <label style={{ marginLeft: 20 }}>预览</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
