import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const actionLogs = sqliteTable("action_logs", {
  id: integer("id").primaryKey(),
  user: text("user").notNull(),
  action: text("action", { enum: ["on", "off"] }).notNull(),
  timestamp: integer("timestamp", { mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type ActionLog = typeof actionLogs.$inferSelect;
