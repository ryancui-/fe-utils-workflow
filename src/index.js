const Router = require('./router')
const JzHandler = require('./jz-handler')

const router = new Router()
router.register('jz', new JzHandler())

const result = router.handle(process.argv[2].trim(), process.argv[3].trim())

console.log(JSON.stringify({
  items: result
}))
