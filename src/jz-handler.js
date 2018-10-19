class JzHandler {
  process(param) {
    const result = []

    if (param.startsWith('0x')) {
      // 16 进制
    } else if (param.endsWith('b')) {
      // 2 进制
    } else if (/^\d*$/.test(param)) {
      // 10 进制
      const hex = Number(param).toString(16).toUpperCase()
      const bin = Number(param).toString(2)
      result.push({
        title: hex,
        subtitle: '16 进制',
        arg: hex
      })
      result.push({
        title: bin,
        subtitle: '2 进制',
        arg: bin
      })
    } else {
      // 不知道是什么鬼
      result.push({
        title: '这个东西是什么鬼',
        subtitle: '你是不是傻',
        arg: '傻猪'
      })
    }

    return result
  }
}

module.exports = JzHandler
