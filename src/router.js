class Router {
  constructor() {
    this.handlers = {}
  }

  // 注册一个处理器
  register(keyword, handler) {
    this.handlers[keyword] = handler
  }

  // 统一处理函数
  handle(keyword, param) {
    const handler = this.handlers[keyword]

    if (handler) {
      return handler.process(param)
    } else {
      return {
        title: '？？？',
        subtitle: '？？？',
        arg: '？？？'
      }
    }
  }
}

module.exports = Router
