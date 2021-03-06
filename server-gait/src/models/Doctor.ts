import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, isEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
//export type UserRoleType = "admin" | "doctor" | "user";

@Entity('doctors')
class Doctor {


    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    token: string;

    @Column({type: 'text',
    unique: true,
    nullable: true})
    @IsEmail()
    email: string;

    @Column()
    @MaxLength(50)
    name: string;

    @Column()
    cpf: string;

    @Column()
    crm: string;

    @Column()
    password?: string;

    @Column()
    activate:number;

    @Column()
    phone: string;
    
    @Column('text', {nullable: true})
    phone2: string;

    @Column({
    nullable:false
    })
    specialization: string;


    

    @CreateDateColumn()
    created_at: Date;


}
export default Doctor;


