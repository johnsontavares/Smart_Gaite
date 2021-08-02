import { getRepository } from 'typeorm';
import {Request, Response} from 'express';

class Create_Exam_Controller{

    public async create_Exam(req:Request, res:Response){
        const examRepositorie = getRepository("ExamCreate")

        const {
            name,
            examDate,
            examDuration,
            examDescription,
            email
        } = req.body;

        var regexDate = new RegExp("^([0-9]{2})(\/)([0-9]{2})(\/)([0-9]{4})$")
        var validateName =  /\s\s/g.test(name);   
        console.log(email)
        
        if(examDescription.length > 320){
            console.log("passou do limite! ")
            return res.status(404).json({message: "Invalid description"})

        }

        if(validateName || name.length > 50){
            return res.status(404).json({message: "Invalid name"})
        }
            // 28/08/2020
        if(!regexDate.test(examDate)){
            return res.status(404).json({message: "Invalid date format"})
        }
        // else{
        //     return res.status(200).json({message: "Valid date format"})
        // }

        if(!regexDate.test(examDate)){
            return res.status(404).json({message: "Invalid date format"})

        }
        if(examDuration.length > 6){
            return res.status(404).json({message: "Invalid duration format"})

        }
        
        const user = await examRepositorie.create(req.body)
        const results = await examRepositorie.save(user)
        return res.send(results)

    }
}

export default new Create_Exam_Controller();