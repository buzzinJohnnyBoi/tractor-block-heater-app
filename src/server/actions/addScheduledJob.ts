"use server";

import db from "@/server/database/db";
import { NewScheduledJob, scheduledJobs } from "@/server/database/schema";
import { z } from "zod";

const scheduledJobSchema = z.object({
  user: z.string().min(1, { message: "Please enter username" }),
  action: z.enum(["ON", "OFF"]),
  recurring: z.boolean(),
  time: z.string().regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Time must be in format HH:MM (24-hour)",
  }),
});

export default async function addScheduledJob(job: NewScheduledJob) {
  try {
    const parsedJob = scheduledJobSchema.parse(job);
    await db.insert(scheduledJobs).values(parsedJob);
    return { error: false, message: "Successfully added scheduled job" };
  } catch (e: Error | unknown) {
    if (e instanceof Error) {
      if (e instanceof z.ZodError) {
        return { error: true, message: e.errors[0].message };
      }
      return { error: true, message: e.message };
    }
    return { error: true, message: "An unknown error occurred" };
  }
}
