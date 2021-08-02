import { Router } from 'express';
import  Create_User_Controller  from '../controller/CreateUser/createUserController'

const routes = Router();

routes.post('/new-user', Create_User_Controller.create_new_user);
routes.get('/new-user/:cpf' ,Create_User_Controller.findByCpf);

export default routes