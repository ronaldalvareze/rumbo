import { Router } from  'express';
import { getUsers,createUsers,updateUsers,deleteUsers,getUser, deleteUser,updateUser} from '../controllers/users.controller.js';


const router = Router()

router.get('/users',getUsers)

router.get('/users/:id', getUser)

router.post('/users',createUsers)

router.put('/users',updateUsers)

router.put('/users/:id',updateUser)

router.delete('/users' ,deleteUsers)

router.delete('/users/:id', deleteUser)


export default router