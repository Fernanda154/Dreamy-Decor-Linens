import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAuxProductCategory1708377954139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "product_category",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "product_id",
                  type: "int",
                },
                {
                    name: "category_id",
                    type: "int",
                  },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "CURRENT_TIMESTAMP",
                  onUpdate: "CURRENT_TIMESTAMP",
                },
              ],
              foreignKeys: [
                {
                  name: "product",
                  referencedTableName: "product",
                  referencedColumnNames: ["id"],
                  columnNames: ["product_id"],
                },
                {
                    name: "category",
                    referencedTableName: "category",
                    referencedColumnNames: ["id"],
                    columnNames: ["category_id"],
                }           
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("product_category");
    }

}
