import React, { useState } from 'react'
import { Input, Icon, Row } from 'antd'
// import { withRouter } from 'react-router-dom'

const SearchButton = () => {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = () => {
    // if (keyword) props.history.push(`/?page=1&keyword=${keyword}`)
  }

  const handleChange = (e: any) => {
    setKeyword(e.target.value)
  }

  const handlePressEnter = (e: any) => {
    e.target.blur()
  }

  return (
    <div id="search-box">
      <Icon
        type="search"
        className="search-icon"
        // onClick={e => props.history.push(`/?page=1&keyword=${keyword}`)}
      />
      <Input
        type="text"
        value={keyword}
        onChange={handleChange}
        onBlur={handleSubmit}
        onPressEnter={handlePressEnter}
        className="search-input"
        placeholder="搜索文章"
        style={{ width: 200 }}
      />
    </div>
  )
}

export default SearchButton
