import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("Missing environment variables for database connection");
}

export default defineConfig({
  dialect: "sqlite",
  dbCredentials: {
    url: databaseUrl,
  },
  schema: "./src/server/database/schema.ts",
  out: "./src/server/database/migrations",
});
