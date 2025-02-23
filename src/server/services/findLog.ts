import { desc } from "drizzle-orm";
import db from "@/server/database/db";
import { actionLogs } from "@/server/database/schema";

const maxNumberOfLogs = 50;

export default async function findLogs() {
  const logs = await db
    .select()
    .from(actionLogs)
    .orderBy(desc(actionLogs.timestamp))
    .limit(maxNumberOfLogs);
  return logs;
}
