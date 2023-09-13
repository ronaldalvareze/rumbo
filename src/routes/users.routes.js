import { Router } from  'express';
import { getUsers,createUsers,updateUsers,deleteUsers,getUser} from '../controllers/users.controller.js'


const router = Router()

router.get('/users',getUsers)
router.get('/user/:id', getUser)
router.post('/users',createUsers)
router.put('/users',updateUsers)
router.delete('/users' ,deleteUsers)


export default router