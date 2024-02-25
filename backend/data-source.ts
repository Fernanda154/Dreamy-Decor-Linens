import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";

const options: DataSourceOptions & SeederOptions = {
  type: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "Fernanda",
  password: "123",
  database: "Dreamy",
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  seedTracking: false,
  factories: ["src/database/factories/**/*{.ts,.js}"],
};
export const AppDataSource = new DataSource(options);
