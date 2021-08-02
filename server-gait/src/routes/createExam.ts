import { Router } from 'express';
import  Create_Exam_Controller  from '../controller/createExamController/createExamController'

const routes = Router();

routes.post('/users', Create_Exam_Controller.create_Exam);

export default routes;