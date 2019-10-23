export const result = {
  code: 200,
  message: 'success',
  data: {
    count: 75,
    rows: [
      {
        createdAt: '2019-06-03 13:39:30',
        updatedAt: '2019-10-14 21:37:27',
        id: 32,
        title: '封装组件系列 - el 分页表格',
        content:
          '## 前言\n\n本次封装基于 `antd` 风格, 实现高度可配置的表格封装配置。本来想通过 `vue.extends` 去封装的，奈何几个月没写过 `vue` ，而且对 `vue` 的 `extends` 不熟悉所以放弃了...\n\n之前有小伙伴确实引用了我的代码，发现封装出现了一些纰漏，对此十分抱歉，之前封装的太仓促了。几个月前的代码，现在重新封装又有了新的体会。\n\n更新时间 【2018.11.09】，效果如下：\n\n![](https://user-gold-cdn.xitu.io/2018/11/9/166f7e2fa283341b?w=1896&h=761&f=png&s=84208)\n\n## API 说明\n\n- `columns` : **必选**, 列描述数据对象， Array\n- `dataSource` : **必选**, 数据数组\n- `options` : **必选**, 表格参数控制, maxHeight、stripe 等等..\n- `fetch` : 获取数据的 Function\n- `pagination` : 分页信息，不传则不显示分页\n- `row-click` ：当某一行被点击时会触发该事件\n- `selection-change` : 当选择项发生变化时会触发该事件\n- 其他的 api 可以自行添加\n\n其他说明我在代码注释中写的很清楚了，请自行查看。\n\n根据条件渲染: 只通过 `render` 去判断参数不同而渲染不一样的表格数据。 `render` 函数可以渲染任何你想要的组件\n\n值得注意的是，`this` 对象的绑定不要出错了,如果需要更多增强的功能，各位可以自行添加...\n\n<!--more-->\n\n## Home.vue 组件\n\n```html\n<template>\n    <div>\n      <h2>Home</h2>\n      <CommonTable\n        :columns="columns"\n        :dataSource="tableData"\n        :options="options"\n        :fetch="fetchTableData"\n        :pagination="pagination"\n        @row-click="handleRowClick"',
        viewCount: 17,
        tags: [{ name: 'Vue' }],
        categories: [{ name: 'Vue' }],
        comments: [],
      },
      {
        createdAt: '2019-05-16 16:11:07',
        updatedAt: '2019-10-10 14:36:05',
        id: 73,
        title: 'nginx - 基础',
        content:
          '##  安装\n\n```bash\nyum list | grep nginx # 查看yum是否已经存在 会出现一些列表~\n\n# 自行配置yum源\nvim /etc/yum.repos.d/nginx.repo\n\n## 新增\n\n[nginx]\nname=nginx repo\nbaseurl=http://nginx.org/packages/OS/OSRELEASE/$basearch/\ngpgcheck=0\nenabled=1\n\n## 赋值完成后，你需要修改一下对应的操作系统和版本号，因为我的是centos和7的版本，所以改为这样。\nbaseurl=http://nginx.org/packages/centos/7/$basearch/\n\n# 安装\nyum install nginx\n\n# check\nnginx -v\n```\n\n## Nginx基本配置文件详讲\n\n查看 nginx 安装在哪里\n\n```bash\nrpm -ql nginx\n```\n\n```bash\ncd /etc/nginx # 我这里可以直接进入 nginx 目录\nls\nconf.d  fastcgi_params  koi-utf  koi-win  mime.types  modules  nginx.conf  scgi_params uwsgi_params  win-utf\n```\n\n### nginx.conf\n\n```bash\nvim nginx.conf # 打开 nginx.conf 文件\n\n#运行用户，默认即是nginx，可以不进行设置\nuser  nginx;\n#Nginx进程，一般设置为和CPU核数一样\nworker_processes  1;   \n#错误日志存放目录\nerror_log  /var/log/nginx/error.log warn;\n#进程pid存放位置\npid        /var/run/nginx.pid;\nevents {\n    worker_connections  1024; # 单个后台进程的最大并发数\n}\nhttp {\n    include       /etc/nginx/mime.types;   #文件扩展名与类型映射表\n    default_type  application/octet-stream;  #默认文件类型',
        viewCount: 20,
        tags: [{ name: 'HTTP' }, { name: 'nginx' }],
        categories: [{ name: 'HTTP' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 05:09:15',
        updatedAt: '2019-10-19 17:33:58',
        id: 69,
        title: 'koa2-基础知识',
        content:
          '## 起步\n\n```\nnpm i koa -S\n```\n\n```js\nconst Koa = require(\'koa\')\n\nconst app = new Koa()\n\napp.use(async ctx => {\n  ctx.body = \'hello koa\'\n})\n\napp.listen(3000, () => {\n  console.log(\'app listen on http://127.0.0.1:3000\')\n})\n```\n<!--more-->\n\n## 接收 get / post 请求\n\n### get => ctx.query\n\n```js\napp.use(async ctx => {\n  /**\n   * test: http://localhost:3000/?username=guodada\n   * url: /?username=guodada\n   * query: {username: "guodada"}\n   * querystring: username=guodada\n   * request: { header, method, url}\n   */\n  let { url, request, query, querystring } = ctx\n  ctx.body = { url, request, query, querystring }\n})\n```\n\n- `query`：返回的是格式化好的参数对象。\n- `querystring`：返回的是请求字符串。\n\n### post => ctx.request.body\n\n对于 `POST` 请求的处理，`Koa2` 没有封装方便的获取参数的方法，需要通过解析上下文 `context` 中的原生 `node.js` 请求对象 `req` 来获取。\n\n```js\n// 将 useraname=guodada&age=22 解析为 { "useraname": "guodada", "age":  22 }\nconst parseQueryStr = queryStr => {\n  let queryData = {}\n  let queryStrList = queryStr.split(\'&\')\n  for (let [index, queryStr] of query',
        viewCount: 56,
        tags: [{ name: 'node' }],
        categories: [{ name: 'koa2' }],
        comments: [{ id: 13, replies: [{ id: 7 }] }],
      },
      {
        createdAt: '2019-02-23 05:08:12',
        updatedAt: '2019-10-16 15:06:49',
        id: 68,
        title: 'git 实用指南',
        content:
          "\n## commit 规范速查\n\n- `feat`：新功能（feature）\n- `fix`：修补 bug\n- `docs`：文档（documentation）\n- `style`： 格式（不影响代码运行的变动）\n- `refactor`：重构（即不是新增功能，也不是修改 bug 的代码变动）\n- `test`：增加测试\n- `chore`：构建过程或辅助工具的变动\n- `revert`: 撤销以前的 commit\n \n ```bash\n revert: feat(pencil): add 'graphiteWidth' option\n ```\n\n<!--more-->\n\n## 本地创建、连接远程仓库\n\n```bash\n# 创建并连接远程仓库\nmkdir git-demo\n\ncd git-demo/\n\ngit init\n\n# 连接远程仓库\ngit remote add origin https://github.com/gershonv/git-demo.git\n```\n\n## 新建文件并推向远端\n\n```bash\n# 创建 a.js\ntouch a.js\n\n# 添加到暂存区（见下文）\ngit add .\n\n# commit 记录（见下文）\ngit commit -m 'feat: 新增 a.js 文件'\n\n# 推向远端 master 分支（见下文）\ngit push origin master\n```\n\n- git add\n  - `git add [file1 file2 file3...]`: 添加多个文件\n  - `git add .` : 暂存所有文件\n\n## git status\n\n![](https://user-gold-cdn.xitu.io/2019/1/8/1682b86ab859defb?w=505&h=412&f=png&s=45734)\n\nM - 被修改，A - 被添加，D - 被删除，R - 重命名，?? - 未被跟踪\n\n## 撤销操作\n\n### 撤销 git add\n\n```bash\n# 新建 b.js 文件\ntouch b.js\n\ngit add .\n\ngit statis\n\n# 撤销 git add\ngit reset head b.js\n```\n\n- `git reset head` : 如果后面什么都不跟的话 就是上一次 ad",
        viewCount: 38,
        tags: [{ name: 'tools' }],
        categories: [{ name: 'git' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 05:06:36',
        updatedAt: '2019-10-02 02:40:50',
        id: 67,
        title: 'webpack - plugins',
        content:
          "## 功能类\n\n### html-webpack-plugin\n\n- 把编译后的文件（css/js）插入到入口文件中，可以只指定某些文件插入，可以对 html 进行压缩等\n- `filename`：输出文件名；\n- `template`：模板文件，不局限于 html 后缀哦；\n- `removeComments`：移除 HTML 中的注释；\n- `collapseWhitespace`：删除空白符与换行符，整个文件会压成一行；\n- `inlineSource`：插入到 html 的 css、js 文件都要内联，即不是以 link、script 的形式引入；\n- `inject`：是否能注入内容到 输出 的页面去；\n- `chunks`：指定插入某些模块；\n- `hash`：每次会在插入的文件后面加上 hash ，用于处理缓存，如：；\n  其他：favicon、meta、title ……；\n\n<!--more-->\n\n```js\nconst path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nmodule.exports = {\n  mode: 'production',\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'), // 输出文件的目录\n    filename: 'js/[name].[hash:8].js' // 打包路径及名称\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      filename: 'index.html', // 生成文件名\n      template: './public/index.html', // 配置要被编译的html文件\n      hash: true,\n      // 压缩HTML文件\n      minify: {\n        removeAttributeQuotes: true, //删除双引号\n        collapseWhitespace: true //折叠 html 为一行\n      }\n    })\n  ]\n}\n```\n\n",
        viewCount: 6,
        tags: [{ name: 'webpack' }],
        categories: [{ name: 'webpack' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 05:05:52',
        updatedAt: '2019-09-23 15:12:55',
        id: 66,
        title: 'webpack - babel篇',
        content:
          '\n> [Babel](https://babeljs.io/docs/en/) 是一个让我们能够使用 ES 新特性的 JS 编译工具，我们可以在 `webpack` 中配置 `Babel`，以便使用 ES6、ES7 标准来编写 JS 代码。\n\n本文以当前最新版本的 [babel - 7.10](https://babeljs.io/docs/en/) 为例， 做 `babel` 的配置. 相关版本号如下\n\n```json\n{\n  "devDependencies": {\n    "@babel/core": "^7.1.6",\n    "@babel/plugin-proposal-decorators": "^7.1.6",\n    "@babel/plugin-transform-runtime": "^7.1.0",\n    "@babel/preset-env": "^7.1.6",\n    "@babel/runtime": "^7.1.5",\n    "babel-loader": "^8.0.4",\n    "webpack": "^4.26.1",\n    "webpack-cli": "^3.1.2"\n  }\n}\n```\n<!--more-->\n\n## babel-loader 和 @babel/core\n\n建立基本的 `webpack` 配置文件\n\n```js\nmkdir webpack-babel => cd  webpack-babel => yarn init -y  // 初始化\nnpm i yarn -g // 安装了yarn可以忽略\nyarn add webpack webpack-cli -D\n\n// package.json 中添加：\n"scripts": {\n  "start": "webpack --mode development",\n  "build": "webpack --mode production"\n}\n\nyarn add babel-loader @babel/core -D\n```\n\n- [yarn](https://www.npmjs.com/package/yarn) : 和 `npm` 几乎一样，本文使用 `yarn` 安装...\n- [babel-loader](https://www.npmjs.c',
        viewCount: 6,
        tags: [{ name: 'webpack' }],
        categories: [{ name: 'webpack' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 04:27:26',
        updatedAt: '2019-10-12 01:25:38',
        id: 5,
        title: 'react 入门',
        content:
          '```html\n<script src="https://unpkg.com/react@16/umd/react.development.js"></script>\n<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>\n<!-- 生产环境中不建议使用 -->\n<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>\n\n<div id="example"></div>\n<script type="text/babel">\nReactDOM.render(\n    <h1>Hello, world!</h1>,\n    document.getElementById(\'example\')\n);\n</script>\n```\n\n- react.min.js - React 的核心库\n- react-dom.min.js - 提供与 DOM 相关的功能\n- babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码\n\n<!--more-->\n\n## 使用 create-react-app 快速构建 React 开发环境\n\n```\ncnpm install -g create-react-app\ncreate-react-app my-app\nnpm run eject\n```\n\n`TodoList`\n```jsx\nimport React, {Component} from \'react\';\n\nclass TodoList extends Component {\n    constructor(props) {\n        super(props)\n\n        this.state = {\n            list: [],\n            inputValue: \'\'\n        }\n\n        this.handleChange = this.handleChange.bind(this)\n        this.handleBtnClick = this.handleBtnClick.bind(th',
        viewCount: 5,
        tags: [{ name: 'React' }],
        categories: [{ name: 'React' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 04:27:13',
        updatedAt: '2019-10-16 14:58:25',
        id: 6,
        title: 'react-context 实现 todoList',
        content:
          "`src/context/TodoContext.js`\n\n```jsx\nimport React, { Component } from 'react'\n\nexport const TodoContext = React.createContext()\n\nexport class TodoProvider extends Component {\n  state = {\n    todoList: []\n  }\n\n  addTodo = text => {\n    const todoList = [...this.state.todoList, { id: Math.random(), text }]\n    this.setState({ todoList })\n  }\n\n  deleteTodo = id => {\n    const todoList = this.state.todoList.filter(todo => todo.id !== id)\n    this.setState({ todoList })\n  }\n\n  clearTodos = () => {\n    this.setState({ todoList: [] })\n  }\n\n  render() {\n    return (\n      <TodoContext.Provider\n        value={{\n          todoList: this.state.todoList,\n          addTodo: this.addTodo,\n          deleteTodo: this.deleteTodo,\n          clearTodos: this.clearTodos\n        }}>\n        {this.props.children}\n      </TodoContext.Provider>\n    )\n  }\n}\n```\n<!--more-->\n\n`App.jsx`\n\n```jsx\nimport React, { Component } from 'react'\n\nimport { TodoContext, TodoProvider } from './context/TodoContext'\n\nclass App e",
        viewCount: 8,
        tags: [{ name: 'React' }],
        categories: [{ name: 'React' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 04:27:03',
        updatedAt: '2019-10-13 11:50:06',
        id: 7,
        title: 'react-context',
        content:
          "## 简单使用\n\n`Context` 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据，你可以看做为 `redux`，因为 `redux` 也是通过这个东东实现的。\n\n```jsx\nimport React, { Component } from 'react'\n\n/**\n * 1. 创建 context\n * 2. 根组件 App 包裹 MyContext.Provider\n * 3. App => Father => Child => MyContext.Consumer => context.age 取出结果\n */\nconst MyContext = React.createContext()\n\nconst Child = () => (\n  <MyContext.Consumer>{({ age }) => <p>My age is {age}</p>}</MyContext.Consumer>\n)\n\nconst Father = () => <Child />\n\nclass App extends Component {\n  render() {\n    return (\n      <MyContext.Provider value={{ age: 22 }}>\n        <Father />\n      </MyContext.Provider>\n    )\n  }\n}\n\nexport default App\n```\n<!--more-->\n\n## 理论知识\n\n### React.createContext\n\n```jsx\nconst { Provider, Consumer } = React.createContext(defaultValue)\n```\n\n创建一对 { `Provider`, `Consumer` }。当 React 渲染 `context` 组件 `Consumer` 时，它将从组件树的上层中最接近的匹配的 `Provider` 读取当前的 `context` 值。\n\n### Provider\n\n```jsx\n<Provider value={/* some value */}>\n\n```\n\nReact 组件允许 `Consumers` 订阅 `context` 的改变。\n接收一个 `value` 属性传递给",
        viewCount: 3,
        tags: [{ name: 'React' }],
        categories: [{ name: 'React' }],
        comments: [],
      },
      {
        createdAt: '2019-02-23 04:26:52',
        updatedAt: '2019-10-20 02:19:38',
        id: 8,
        title: 'react - 高阶组件',
        content:
          "## 高阶函数 / 柯理化\n\n> 高阶函数（`Higher Order Function`）=> 参数或返回值为函数\n\n比较常见的有数组的遍历方式 Map、Reduce、Filter、Sort；常用的 redux 中的 `connect` 方法也是高阶函数。\n\n```js\n// 高阶函数 - 简单的例子\nfunction add(a, b, fn) {\n  return fn(a) + fn(b)\n}\nvar fn = function(a) {\n  return a * a\n}\nadd(2, 3, fn) // 13\n```\n\n> 函数柯里化 接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术\n\n```js\nconst add = function(x) {\n  return function(y) {\n    return function(z) {\n      return x + y + z\n    }\n  }\n}\n\nconsole.log(add(1)(2)(3)) // 6\nconsole.log(add(1)) // function (y) {...}\n```\n\n## 高阶组件（属性代理）\n\n> HOC(全称 `Higher-order component`)是一种 React 的进阶使用方法，主要还是为了便于组件的复用。HOC 就是一个方法，获取一个组件，返回一个更高级的组件。\n\n以下是简单实现的 hoc:\n\n```js\nconst Hoc = WrappedComponent =>\n  class extends Component {\n    render() {\n      return <WrappedComponent {...this.props} name={'guodada'} />\n    }\n  }\n\n// use\nconst Demo = props => <span>{props.name}</span>\nexport default Hoc(Demo)\n```\n\n### hoc 的具体用途\n\n1. 代码复用\n2. 对 props 进行增删改、监控\n3. 渲染劫持\n\n其实，除了代码复用和模块化，`HOC` 做的其实就是劫持，由于传入的 `wrappedCo",
        viewCount: 5,
        tags: [{ name: 'React' }],
        categories: [{ name: 'React' }],
        comments: [],
      },
    ],
  },
}
