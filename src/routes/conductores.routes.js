import { Router } from 'express';
import { getConductores, createConductores, updateConductores, deleteConductores, getConductor } from '../controllers/conductores.controller.js';

const router = Router();

router.get('/conductores', getConductores);

router.get('/conductor/:id', getConductor);

router.post('/conductores', createConductores);

router.put('/conductores', updateConductores);


router.delete('/conductores', deleteConductores);

export default router;
