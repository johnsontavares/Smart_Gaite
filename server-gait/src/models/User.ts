import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('ExamCreate')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    examDate: string;

    @Column()
    email: string;

    @Column()
    examDuration: string;

    @Column()
    examDescription: string;
}
