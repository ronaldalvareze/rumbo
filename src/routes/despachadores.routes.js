import { Router } from  'express';
import { getDespachadores,createDespachadores,updateDespachadores,deleteDespachadores, getDespachador, deleteDespachador} from '../controllers/despachadores.controller.js'


const router = Router()

router.get('/despachadores',getDespachadores)

router.get('/despachador/:id',getDespachador)

router.post('/despachadores',createDespachadores)

router.put('/despachadores',updateDespachadores)

router.delete('/despachadores',deleteDespachadores)


router.delete('/despachador/:id',deleteDespachador)



export default router