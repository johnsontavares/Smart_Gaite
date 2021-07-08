import { getRepository } from 'typeorm';
import { NextFunction } from 'express';
import { Request, Response } from 'express';
import Doctor from '../../models/Doctor';
import  jwt  from 'jsonwebtoken';


class Activate {
    public async verifyActivate(req:Request, res:Response, next:NextFunction){
        
        const { id } = req.params;

       
        const testeRepository = getRepository(Doctor);
        
        const doctor = await testeRepository.findOne(req.params.id);
        
        if(!doctor){
            return res.status(404).json({ message: "User not found" });
        }
        jwt.verify(doctor.token, 'secret', function(err, decode){
            if(err?.message === 'jwt expired'){
                return res.status(404).json({ message: "Token expirado" });
            }
            
        })
        
        
        doctor.activate = 1;

        await testeRepository.update(id,doctor);

        return res.status(200).json({ message: "Email successfully validated!" });
        
        
    }
}

export default new Activate();