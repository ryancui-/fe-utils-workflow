class TestOut {
  constructor() {
    this.result = []
  }

  // 添加一项
  addItem(title, subtitle, arg) {
    this.result.push({
      title, subtitle, arg
    })
  }

  print() {
    return this.result
  }

  clear() {
    this.result = []
  }
}

module.exports = TestOut
