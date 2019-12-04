declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly API_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
  }
}
