import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateHistoric1708378717529 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "historic",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "user_id",
                  type: "int",
                },
                {
                    name: "payment_form",
                    type: "varchar",
                },
                {
                    name: "price",
                    type: "double",
                },
                {
                  name: "date",
                  type: "timestamp",
                  default: "CURRENT_TIMESTAMP",
                  onUpdate: "CURRENT_TIMESTAMP",
                },
              ],
              foreignKeys: [
                {
                  name: "fk_user",
                  referencedTableName: "user",
                  referencedColumnNames: ["id"],
                  columnNames: ["user_id"],
                }        
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
