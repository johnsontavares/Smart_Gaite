import { getRepository } from 'typeorm';
import {Request, Response} from 'express';

class Create_Exam_Controller{

    public async create_Exam(req:Request, res:Response){
        const examRepositorie = getRepository("ExamCreate")
        
        const user = await examRepositorie.create(req.body)
        const results = await examRepositorie.save(user)
        return res.send(results)

    }
}

export default new Create_Exam_Controller();