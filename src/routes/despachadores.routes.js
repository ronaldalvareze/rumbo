import { Router } from  'express';
import { getDespachadores,createDespachadores,updateDespachadores,deleteDespachadores, getDespachador} from '../controllers/despachadores.controller.js'


const router = Router()

router.get('/despachadores',getDespachadores)

router.get('/despachador/:id',getDespachador)

router.post('/despachadores',createDespachadores)

router.put('/despachadores',updateDespachadores)

router.delete('/despachadores',deleteDespachadores)



export default router