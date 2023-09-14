import { Router } from 'express';
import { getConductores, createConductores, updateConductores, deleteConductores, getConductor, deleteConductor, updateConductor } from '../controllers/conductores.controller.js';

const router = Router();

router.get('/conductores', getConductores);

router.get('/conductores/:id', getConductor);

router.post('/conductores', createConductores);

router.put('/conductores', updateConductores);

router.patch('/conductores/:id', updateConductor);

router.delete('/conductores', deleteConductores);


router.delete('/conductores/:id', deleteConductor);



export default router;
