import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1616431840513 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'ExamCreate',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'examDate',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'examDuration',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'examDescription',
                        type: 'varchar',
                        isNullable: false,
                    },
                ]
            })
        );
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('ExamCreate');
    }

}
