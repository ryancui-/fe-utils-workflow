const Router = require('./router')
const JzHandler = require('./jz-handler')
const WorkflowOut = require('./wf-out')

const out = new WorkflowOut()
const router = new Router()
router.register('jz', new JzHandler(out))

router.handle(process.argv[2].trim(), process.argv[3].trim())

out.print()
