import { Router } from  'express';
import { getConductores, createConductores, updateConductores, deleteConductores} from '../controllers/conductores.controller.js'


const router = Router()

router.get('/condutores',getConductores)
router.post('/conductores',createConductores)
router.put('/conductores',updateConductores)
router.delete('/conductores',deleteConductores)


export default router