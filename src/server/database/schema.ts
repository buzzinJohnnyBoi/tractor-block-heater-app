import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const actionLogs = sqliteTable("action_logs", {
  id: integer("id").primaryKey(),
  user: text("user").notNull(),
  action: text("action", { enum: ["ON", "OFF"] }).notNull(),
  timestamp: integer("timestamp", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const scheduledJobs = sqliteTable("scheduled_jobs", {
  id: integer("id").primaryKey(),
  user: text("user").notNull(),
  action: text("action", { enum: ["ON", "OFF"] }).notNull(),
  timestamp: integer("timestamp", { mode: "timestamp" }).notNull(),
  recurring: integer("recurring", { mode: "boolean" }).notNull(),
});

export type ActionLog = typeof actionLogs.$inferSelect;
export type NewActionLog = typeof actionLogs.$inferInsert;

export type ScheduledJob = typeof scheduledJobs.$inferSelect;
export type NewScheduledJob = typeof scheduledJobs.$inferInsert;
