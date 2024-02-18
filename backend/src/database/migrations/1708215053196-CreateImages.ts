import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateImages1708215053196 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "images",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "path",
            type: "varchar",
          },
          {
            name: "product_id",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            name: "product_image",
            referencedTableName: "product",
            referencedColumnNames: ["id"],
            columnNames: ["product_id"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("images");
  }
}
