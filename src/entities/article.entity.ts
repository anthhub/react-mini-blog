import { CommonEntity } from './common.entity'

export class ArticleEntity extends CommonEntity {
  author!: string

  content!: string

  title!: string

  screenshot!: string

  type!: string
}
