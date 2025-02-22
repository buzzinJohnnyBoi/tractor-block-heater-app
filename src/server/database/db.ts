import { drizzle } from "drizzle-orm/libsql";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL and DATABASE_AUTH_TOKEN must be set");
}

const db = drizzle({
  connection: {
    url: process.env.DATABASE_URL,
    // authToken: process.env.DATABASE_AUTH_TOKEN,
  },
});

export default db;
