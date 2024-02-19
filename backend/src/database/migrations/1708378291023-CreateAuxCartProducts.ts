import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAuxCartProducts1708378291023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "cart_product",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "cart_id",
                  type: "int",
                },
                {
                    name: "product_id",
                    type: "int",
                },
                {
                    name: "quantity",
                    type: "double",
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
                    name: "fk_product",
                    referencedTableName: "product",
                    referencedColumnNames: ["id"],
                    columnNames: ["product_id"],
                  },
                {
                    name: "fk_cart",
                    referencedTableName: "cart",
                    referencedColumnNames: ["id"],
                    columnNames: ["cart_id"],
                }           
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cart_product");
    }

}
