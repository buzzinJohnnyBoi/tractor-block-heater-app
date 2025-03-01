"use server";

import { eq } from "drizzle-orm";
import db from "@/server/database/db";
import { scheduledJobs } from "@/server/database/schema";

export default async function deleteScheduledJob(jobId: number) {
  await db.delete(scheduledJobs).where(eq(scheduledJobs.id, jobId));
}
