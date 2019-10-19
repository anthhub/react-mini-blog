import React, { useState } from 'react'
// import { Icon, Dropdown, Menu, Input, message } from 'antd'
// import { Link } from 'react-router-dom'
// import { withRouter } from 'react-router-dom'

import './index.less'

const HeaderLeft = props => {
  const [keyword, setKeyword] = useState('')

  // const menu = (
  //   <Menu className="header-nav">
  //     {navList.map(nav => (
  //       <Menu.Item key={nav.link}>
  //         <Link to={nav.link}>
  //           {nav.icon && <Icon type={nav.icon} style={{ marginRight: 15 }} />}
  //           <span className="nav-text">{nav.title}</span>
  //         </Link>
  //       </Menu.Item>
  //     ))}
  //     <Menu.Item key={'search'}>
  //       <Icon type="search" />
  //       <Input className="search-input" onClick={clickSearch} value={keyword} onChange={handleChange} onPressEnter={onPressEnter} onBlur={onSubmit} />
  //     </Menu.Item>
  //   </Menu>
  // )

  // function handleChange(e) {
  //   e.preventDefault()
  //   setKeyword(e.target.value)
  // }

  // function onPressEnter(e) {
  //   e.target.blur()
  // }

  // function onSubmit() {
  //   props.history.push(`/?page=1&keyword=${keyword}`)
  //   setKeyword('')
  // }

  // function clickSearch(e) {
  //   e.stopPropagation()
  // }

  return (
    <div className="header-left">
      {/* <SvgIcon type="iconblog" style={{ color: '#055796', width: 16, height: 16 }} /> */}
      <span className="blog-name">{'博客'}</span>
      {/* <Dropdown overlayClassName="header-dropdown" trigger={['click']} overlay={menu} getPopupContainer={() => document.querySelector('.app-header .header-left')}>
        <Icon type="menu-o" className="header-dropdown-icon" />
      </Dropdown> */}
    </div>
  )
}

export default HeaderLeft
