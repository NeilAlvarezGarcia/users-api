import { DataSource } from "typeorm";
import { Users } from "./entities/users";

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ""),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Users],
  synchronize: true,
  ssl: false,
});

export { AppDataSource };
