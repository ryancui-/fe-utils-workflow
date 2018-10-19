const JzHandler = require('../../src/jz-handler')
const TestOut = require('./test-out')

const out = new TestOut()
const handler = new JzHandler(out)

beforeEach(() => {
  out.clear()
});

test('转换 10 进制', () => {
  handler.process('20')
  expect(out.print()).toEqual([{
    title: '14',
    subtitle: '16 进制',
    arg: '14'
  }, {
    title: '10100',
    subtitle: '2 进制',
    arg: '10100'
  }])
})

test('转换 2 进制', () => {
  handler.process('10111000b')
  expect(out.print()).toEqual([{
    title: '184',
    subtitle: '10 进制',
    arg: '184'
  }, {
    title: 'B8',
    subtitle: '16 进制',
    arg: 'B8'
  }])
})

test('转换 16 进制（大写）', () => {
  handler.process('0xFF')
  expect(out.print()).toEqual([{
    title: '255',
    subtitle: '10 进制',
    arg: '255'
  }, {
    title: '11111111',
    subtitle: '2 进制',
    arg: '11111111'
  }])
})

test('转换 16 进制（小写）', () => {
  handler.process('0xff')
  expect(out.print()).toEqual([{
    title: '255',
    subtitle: '10 进制',
    arg: '255'
  }, {
    title: '11111111',
    subtitle: '2 进制',
    arg: '11111111'
  }])
})
