import { Router } from  'express';
import { getDespachadores,createDespachadores,updateDespachadores,deleteDespachadores} from '../controllers/despachadores.controller.js'


const router = Router()

router.get('/despachadores',getDespachadores)
router.post('/despachadores',createDespachadores)
router.put('/despachadores',updateDespachadores)
router.delete('/despachadores',deleteDespachadores)


export default router