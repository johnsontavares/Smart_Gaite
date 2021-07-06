import { Router } from 'express';
import { isDoctor, verifyToken } from './../middlewares/authJWT';
import CreateDoctorController from '../controller/doctorController/createDoctor';
import LoginDoctorController from '../controller/doctorController/loginDoctor';
import Activate from '../controller/doctorController/Activate';
import ProfileController from '../controller/doctorController/ProfileController';
import AllUsers from '../controller/doctorController/getAllUsers';
import ForgotePassword from '../controller/doctorController/forgotPasswordDoctor';
import EnableDoctorController from '../controller/doctorController/enableDoctor';
import SendEmail from '../controller/doctorController/sendEmailController';

const routes = Router();
routes.post('/doctorSignUp', CreateDoctorController.createDoctor);
routes.post('/activate/:id',Activate.verifyActivate);
routes.get('/allUser',AllUsers.getAll);
routes.post('/signInDoctor', LoginDoctorController.signInDoctor);
routes.get('/showProfile', [verifyToken, isDoctor], ProfileController.show);
routes.put('/updateUser/:id', [verifyToken, isDoctor],ProfileController.updateProfile);
routes.put('/updatePassword/:id', ForgotePassword.passwordUpdate);
routes.patch('/enable/:id',[verifyToken, isDoctor],EnableDoctorController.enable);
routes.post('/emailUpdate', ForgotePassword.forgotDoctorPassword);
routes.put('/updateMailSend/:id', SendEmail.updateEmail);
routes.post('/findEmail/', SendEmail.findEmail);
routes.post('/verifyUser', AllUsers.getUser);
routes.post('/sendEmailController', SendEmail.sendEmail);
export default routes;