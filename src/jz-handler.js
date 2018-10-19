class JzHandler {
  constructor(out) {
    this.out = out
  }

  dec2hex(param) {
    return Number(param).toString(16).toUpperCase()
  }

  dec2bin(param) {
    return Number(param).toString(2)
  }

  hex2dec(param) {
    return parseInt(param, '16') + ''
  }

  hex2bin(param) {
    return parseInt(param, '16').toString(2)
  }

  bin2dec(param) {
    return parseInt(param, '2') + ''
  }

  bin2hex(param) {
    return parseInt(param, '2').toString(16).toUpperCase()
  }

  process(param) {
    if (param.startsWith('0x')) {
      // 16 进制
      const dec = this.hex2dec(param.substring(2))
      const bin = this.hex2bin(param.substring(2))
      this.out.addItem(dec, '10 进制', dec)
      this.out.addItem(bin, '2 进制', bin)
    } else if (param.endsWith('b')) {
      // 2 进制
      const dec = this.bin2dec(param.substring(0, param.length - 1))
      const hex = this.bin2hex(param.substring(0, param.length - 1))
      this.out.addItem(dec, '10 进制', dec)
      this.out.addItem(hex, '16 进制', hex)
    } else if (/^\d*$/.test(param)) {
      // 10 进制
      const hex = this.dec2hex(param)
      const bin = this.dec2bin(param)
      this.out.addItem(hex, '16 进制', hex)
      this.out.addItem(bin, '2 进制', bin)
    } else {
      // 不知道是什么鬼
      this.out.addItem('这个东西是什么鬼', '你是不是傻', '傻猪')
    }
  }
}

module.exports = JzHandler
