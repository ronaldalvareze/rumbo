import { Router } from  'express';
import { getDespachadores,createDespachadores,updateDespachadores,deleteDespachadores, getDespachador, deleteDespachador, updateDespachador} from '../controllers/despachadores.controller.js'


const router = Router()

router.get('/despachadores',getDespachadores)



router.get('/despachadores/:id',getDespachador)



router.post('/despachadores',createDespachadores)



router.put('/despachadores',updateDespachadores)
router.patch('/despachadores/:id',updateDespachador)


router.delete('/despachadores',deleteDespachadores)
router.delete('/despachadores/:id',deleteDespachador)



export default router