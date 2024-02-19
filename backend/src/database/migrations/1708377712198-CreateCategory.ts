import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1708377712198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "category",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "name",
                  type: "varchar",
                }                
              ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
