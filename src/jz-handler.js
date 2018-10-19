class JzHandler {
  constructor(out) {
    this.out = out
  }

  process(param) {
    if (param.startsWith('0x')) {
      // 16 进制
    } else if (param.endsWith('b')) {
      // 2 进制
    } else if (/^\d*$/.test(param)) {
      // 10 进制
      const hex = Number(param).toString(16).toUpperCase()
      const bin = Number(param).toString(2)
      this.out.addItem(hex, '16 进制', hex)
      this.out.addItem(bin, '2 进制', bin)
    } else {
      // 不知道是什么鬼
      this.out.addItem('这个东西是什么鬼', '你是不是傻', '傻猪')
    }
  }
}

module.exports = JzHandler
