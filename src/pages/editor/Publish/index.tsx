/* eslint-disable react-hooks/exhaustive-deps */

import { message } from 'antd'
import React, { useState, useCallback, useEffect } from 'react'

// 引入样式
import { Wrapper } from './style'

// 引入CodeMirror样式
import { createArticle, reeditArticle } from '@/Api/article'
import 'codemirror/mode/markdown/markdown'
import arrowIcon from '../../../statics/arrow-down.svg'
import { useSelector } from '@/redux/context'
import { useHistory } from 'react-router'

interface IProps {
  title: string
  content: {
    markdown: string
    html: string
  }
  type: string
  screenshot: string
  id: string | undefined
}

const Publish: React.FC<IProps> = ({ title, content, type, screenshot = '', id }) => {
  const {
    user: { username },
  } = useSelector()

  // publish 面板标签
  const typeList = ['后端', '前端', 'Android', 'iOS', '人工智能', '开发工具', '代码人生', '阅读', '运维', '勿删']

  const [active, setActive] = useState(type || '')

  // 重新编辑时更新 type
  useEffect(() => {
    setActive(type)
  }, [type])

  // 多选 tags
  // const [ activeList, setActiveList ] = useState<string[]>([])

  // const changeActiveList = useCallback(
  // 	(e: any, item: string) => {
  // 		e.nativeEvent.stopImmediatePropagation()
  // 		if (activeList.includes(item)) {
  // 			const tmp = [ ...activeList ]
  // 			tmp.splice(activeList.indexOf(item), 1)
  // 			setActiveList(tmp)
  // 		} else {
  // 			setActiveList([ ...activeList, item ])
  // 		}
  // 	},
  // 	[ activeList ]
  // )

  const onPublish = useCallback(async () => {
    if (active === '') {
      message.warning('至少选择一个标签')
    } else if (title === '') {
      message.warning('标题不能为空')
    } else if (content.markdown === '' && content.html === '') {
      message.warning('内容不能为空')
    } else {
      // console.log('是不是！！！', screenshot)
      // id 存在，即重新编辑已存在的文章
      if (id) {
        await reeditArticle(id, {
          author: username,
          content: content.markdown,
          html: content.html,
          title,
          screenshot: screenshot,
          type: active,
          tag: [],
        })
        history.replace(`/post/${id}`)
      } else {
        // id 不存在，即新建文章
        const { id } = await createArticle({
          author: username,
          content: content.markdown,
          html: content.html,
          title,
          screenshot: screenshot,
          type: active,
          tag: [],
        })
        history.replace(`/post/${id}`)
      }
    }
  }, [content, title, active, screenshot])

  // 发布文章面板显隐
  const [showPublish, setPublish] = useState(false)

  const hidePublish = useCallback(
    (e: any) => {
      // console.log('点击时是否显示面板', e.target.className, { showPublish })
      if (
        // 点击下列区域以外区域 或 面板打开时点击了这 3 个地方 会收起面板
        (!showPublish &&
          !['publish', 'publish-title', 'arrow-up', 'panel', 'panel-title', 'type-box', 'sub-title', 'type-list', 'item', 'item active', 'publish-btn'].includes(
            e.target.className
          )) ||
        (showPublish && ['publish', 'publish-title', 'arrow-down'].includes(e.target.className))
      ) {
        // console.log('隐藏 publish 面板', { showPublish })
        setPublish(false)
      }
    },
    [showPublish]
  )

  useEffect(() => {
    document.addEventListener('click', hidePublish)
    return () => {
      document.removeEventListener('click', hidePublish)
    }
  }, [])

  const history = useHistory()

  return (
    <Wrapper>
      <div className="with-padding">
        <div
          className="publish"
          onClick={e => {
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
            className={showPublish ? 'arrow-up' : 'arrow-down'}
            style={{
              background: `#fff url(${arrowIcon}) no-repeat center/contain`,
              backgroundSize: '85%',
            }}
          />
        </div>

        {showPublish && (
          <div className="panel">
            <div className="panel-title">发布文章</div>
            <div className="type-box">
              <div className="sub-title">分类</div>
              <ul className="type-list">
                {typeList.map(item => (
                  <li
                    // onClick={(e) => changeActiveList(e, item)}
                    // className={activeList.includes(item) ? 'item active' : 'item'}
                    onClick={() => setActive(item)}
                    className={item === active ? 'item active' : 'item'}
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="publish-btn" onClick={onPublish}>
              确定并发布
            </button>
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default Publish
