const JzHandler = require('../../src/jz-handler')

// Ignore out parameter
const handler = new JzHandler()

describe('10进制', () => {
  test('=> 2进制', () => {
    expect(handler.dec2bin('0')).toBe('0')
    expect(handler.dec2bin('10')).toBe('1010')
    expect(handler.dec2bin('25')).toBe('11001')
  })

  test('=> 16进制', () => {
    expect(handler.dec2hex('0')).toBe('0')
    expect(handler.dec2hex('10')).toBe('A')
    expect(handler.dec2hex('25')).toBe('19')
  })
})

describe('2进制', () => {
  test('=> 10进制', () => {
    expect(handler.bin2dec('0')).toBe('0')
    expect(handler.bin2dec('1010')).toBe('10')
    expect(handler.bin2dec('11001')).toBe('25')
  })

  test('=> 16进制', () => {
    expect(handler.bin2hex('0')).toBe('0')
    expect(handler.bin2hex('1010')).toBe('A')
    expect(handler.bin2hex('11001')).toBe('19')
  })
})

describe('16进制', () => {
  test('=> 10进制', () => {
    expect(handler.hex2dec('0')).toBe('0')
    expect(handler.hex2dec('A')).toBe('10')
    expect(handler.hex2dec('19')).toBe('25')
  })

  test('=> 2进制', () => {
    expect(handler.hex2bin('0')).toBe('0')
    expect(handler.hex2bin('A')).toBe('1010')
    expect(handler.hex2bin('19')).toBe('11001')
  })
})
