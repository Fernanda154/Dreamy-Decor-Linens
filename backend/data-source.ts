import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "Fernanda",
  password: "123",
  database: "Dreamy",
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
});
