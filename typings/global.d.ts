declare var hljs: any

declare interface Window {
  [method: string]: () => void
}

type PromiseState = 'pending' | 'fulfilled' | 'rejected'
