import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from '@/redux/context'

import avatarPic from '../../../statics/avatar.png'
// 引入样式
import { Wrapper } from './style'

const Menu: React.FC = () => {
  // 头像下拉菜单显隐
  const [showDropdown, setDropdown] = useState(false)

  const hideDropdown = useCallback((e: any) => {
    if (e.target.className !== 'avatar') {
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
      // 跳转到 home page
      window.location.href = '/'
    }
  }

  // 拿到用户头像 默认值为本地头像
  const {
    user: { avatarLarge = avatarPic, id },
  } = useSelector()

  return (
    <Wrapper avatarLarge={avatarLarge}>
      <nav className="with-padding navigation">
        <div
          className="avatar"
          onClick={e => {
            // e.nativeEvent.stopImmediatePropagation()
            setDropdown(true)
            // console.log({ showDropdown })
          }}
        />
        {showDropdown && (
          <ul className="dropdown-list">
            <li>
              <Link className="menu-item" to={'/user/' + id}>
                <span>我的主页</span>
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="/settings">
                <span>设置</span>
              </Link>
            </li>
            <li>
              <div className="menu-item" onClick={confirmLogout}>
                <span>登出</span>
              </div>
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
