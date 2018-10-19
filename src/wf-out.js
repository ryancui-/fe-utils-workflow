class WorkflowOut {
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
    console.log(JSON.stringify({
      items: this.result
    }))
  }
}

module.exports = WorkflowOut
