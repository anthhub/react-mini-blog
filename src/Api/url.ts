const VERSION = '/api/v1'

function getBaseUrl() {
  if (process.env.API_ENV === 'development') {
    return 'http://localhost:3003/blog' + VERSION
  }
  return 'http://njj.liuma.top/blog' + VERSION
}

export const baseUrl = getBaseUrl()
