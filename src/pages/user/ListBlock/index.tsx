import React from 'react'
import { useParams } from 'react-router-dom'

import ListBodyFollow from '../ListBodyFollow'
import ListBodyLikes from '../ListBodyLikes'
import ListBodyPosts from '../ListBodyPosts'
import ListHeader from '../ListHeader'
import { Wrapper } from './style'

const ListBlock: React.FC = props => {
  const { item = '' } = useParams() as any

  return (
    <Wrapper>
      <ListHeader />
      {item === 'following' || item === 'followers' ? <ListBodyFollow /> : item === 'likes' ? <ListBodyLikes /> : <ListBodyPosts />}
    </Wrapper>
  )
}

export default ListBlock
