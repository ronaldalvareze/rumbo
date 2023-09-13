import { Router } from 'express';
import { getConductores, createConductores, updateConductores, deleteConductores, getConductor, deleteConductor } from '../controllers/conductores.controller.js';

const router = Router();

router.get('/conductores', getConductores);

router.get('/conductor/:id', getConductor);

router.post('/conductores', createConductores);

router.put('/conductores', updateConductores);


router.delete('/conductores', deleteConductores);


router.delete('/conductor/:id', deleteConductor);



export default router;
