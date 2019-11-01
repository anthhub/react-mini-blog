import marked from 'marked'

declare var hljs: any

// 转化 md 语法为 html
export const translateMarkdown = (plainText: string, isGuardXss = false) => {
  return marked(plainText, {
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight(code: any) {
      return (hljs as any).highlightAuto(code).value
    },
  })
}
