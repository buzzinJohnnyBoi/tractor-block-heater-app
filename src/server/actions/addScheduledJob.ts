"use server";

import db from "@/server/database/db";
import { NewScheduledJob, scheduledJobs } from "@/server/database/schema";

//TODO: add zod validation for job

export default async function addScheduledJob(job: NewScheduledJob) {
  await db.insert(scheduledJobs).values(job);
}
