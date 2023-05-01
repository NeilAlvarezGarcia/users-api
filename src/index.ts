import { config } from "dotenv";
if (process.env.NODE_ENV !== "pruction") config();

import app from "./app";
import { AppDataSource } from "./db/index";

async function main() {
  try {
    await AppDataSource.initialize();
    app.listen({ port: app.get("port") });
  } catch (error) {
    console.log(error);
    process.exit();
  }
}

main();
