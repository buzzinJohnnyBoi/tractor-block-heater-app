import { eq, lt } from "drizzle-orm";
import db from "@/server/database/db";
import { scheduledJobs } from "@/server/database/schema";

export default async function findOverdueScheduledJobs() {
  const currentDate = new Date();
  const result = await db
    .select()
    .from(scheduledJobs)
    .where(lt(scheduledJobs.timestamp, currentDate));
  return result;
}
