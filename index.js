const bin_map = '01'
const hex_map = '0123456789ABCDEF'
const bin_hex_map = [
  '0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111',
  '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'
]

// 10进制转换为16进制
function dec2hex(number) {
  let t = +number
  const result = []
  while (t) {
    const a = t % 16
    t = Math.floor(t / 16)
    result.unshift(hex_map[a])
  }
  return result.join('')
}

// 10进制转换为2进制
function dec2bin(number) {
  let t = +number
  const result = []
  while (t) {
    const a = t % 2
    t = Math.floor(t / 2)
    result.unshift(bin_map[a])
  }
  return result.join('')
}

// 16进制转换为10进制
function hex2dec(number) {
  let result = 0
  let base = 1
  number.split('').reverse().forEach(num => {
    result += hex_map.split('').findIndex(h => h === num) * base
    base = base * 16
  })
  return result
}

// 16进制转换为2进制
function hex2bin(number) {
  return number.split('').map(num => hex_map.findIndex(h => h === num)).map(index => bin_hex_map[index]).join('')
}

// 2进制转换为10进制
function bin2dec(number) {
  let result = 0
  let base = 1
  number.split('').reverse().forEach(num => {
    result += bin_map.split('').findIndex(h => h === num) * base
    base = base * 2
  })
  return result
}

// 2进制转换为16进制
function bin2hex(number) {
  return 123123
}

const keyword = process.argv[2]
const result = []

// keyword 不合法就提示他重新输入


// 默认为十进制
result.push({
  title: dec2hex(+keyword),
  subtitle: '16进制',
  arg: dec2hex(+keyword)
})

console.log(JSON.stringify({
  items: result
}))

