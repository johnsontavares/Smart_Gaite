import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateColumUser1623685909234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE doctors DROP COLUMN phone2')
    
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("doctors", "phone2");
    }

}
