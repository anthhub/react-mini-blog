import { CommonEntity } from './common.entity'

export class ArticleEntity extends CommonEntity {
  author!: string

  content!: string

  html!: string 

  title!: string

  screenshot!: string

  tag!:string[]

  type!: string

  user!:any

  _id!:string

  id!:string

  create_at!:number

  viewCount!: number
  
  likeCount!: number

  commentCount!: number

  isLiked!: boolean
}
