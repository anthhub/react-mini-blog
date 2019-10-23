import React from 'react'

import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon, Tag, Divider } from 'antd'
import SvgIcon from '@/components/SvgIcon'

function getColor(name, colorList) {
  const target = colorList.find(c => c.name === name)
  return target ? target.color : ''
}

const ArticleTag = ({ tagList, categoryList, tagColorList }) => {
  return (
    <>
      {tagList.length > 0 && (
        <>
          <Divider type='vertical' style={{ marginRight: 7 }} />
          <SvgIcon type='icontags' style={{ marginRight: 7 }} />
          {tagList.map((tag, i) => (
            <Tag key={i} color={getColor(tag.name, tagColorList)}>
              <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
            </Tag>
          ))}
        </>
      )}
      {categoryList.length > 0 && (
        <>
          <Divider type='vertical' style={{ marginRight: 7 }} />
          <Icon type='folder' style={{ marginRight: 7 }} />
          {categoryList.map((cate, i) => (
            <Tag key={i} color='#2db7f5'>
              <Link to={`/categories/${cate.name}`}>{cate.name}</Link>
            </Tag>
          ))}
        </>
      )}
    </>
  )
}

ArticleTag.propTypes = {
  tagList: PropTypes.array.isRequired,
  categoryList: PropTypes.array.isRequired
}

export default connect(state => ({
  tagColorList: state.article.tagList
  // colorList: state.article.tagList,
}))(withRouter(ArticleTag))
