const HOST = '/blog'

const ENV_MAP = {
  development: '-dev',
  test: '-test',
  preview: '-prev',
  production: '',
}

const VERSION = '/api/v1'

const DOMAIN = 'http://101.132.79.152'

export const baseUrl = process.env.API_ENV === 'development' ? 'http://localhost:3003/blog-test/api/v1' : DOMAIN + HOST + ENV_MAP[process.env.API_ENV] + VERSION
