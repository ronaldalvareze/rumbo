import { Router } from  'express';
import { getDespachos,createDespachos,updateDespachos,deleteDespachos} from '../controllers/despachos.controller.js'


const router = Router()

router.get('/despachos',getDespachos)
router.post('/despachos',createDespachos)
router.put('/despachos',updateDespachos)
router.delete('/despachos',deleteDespachos)


export default router