import { EntityRepository, Repository} from "typeorm"
import { new_user } from "../entity/NewUser"

@EntityRepository(new_user)
class UserRepository extends Repository<new_user>{

    public async findByCpf(cpf:string):Promise<new_user | undefined>{
        const doctor = await this.findOne({
            where:{
                cpf,
            },
        });
        return doctor;
    }

}

export default UserRepository;