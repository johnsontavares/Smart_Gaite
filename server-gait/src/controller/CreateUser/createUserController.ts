import { getRepository, getCustomRepository } from 'typeorm';
import {Request, Response} from 'express';
import { User } from '../../models/User';
import {new_user} from '../../models/NewUser'
import  UserRepository from '../../repositorie/useRepositorie';

class Create_User_Controller{

    public async create_new_user(req:Request, res:Response){
        const examRepositorie = getRepository("new_user")
        
        const user = await examRepositorie.create(req.body)
        const results = await examRepositorie.save(user)
        return res.send(results)

    }

    public async get_data(req:Request, res:Response): Promise<Response>{
        const UserData = await getRepository(new_user).findOne(req.params.id)
        return res.json(UserData)
    }

    public async findByCpf(req:Request, res:Response, ):Promise<Response>{
        const user = await getCustomRepository(UserRepository)
        const {cpf} = req.params;
        const userData = await user.findByCpf(cpf)
        console.log(userData)
        return res.json(userData);
    } 

}

export default new Create_User_Controller();