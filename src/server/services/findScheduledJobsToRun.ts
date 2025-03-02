import { eq } from "drizzle-orm";
import db from "@/server/database/db";
import { scheduledJobs } from "@/server/database/schema";

export default async function findScheduledJobsToRun() {
  const currentTimeString = findCurrentTime();

  return await db
    .select()
    .from(scheduledJobs)
    .where(eq(scheduledJobs.time, currentTimeString));
}

function findCurrentTime() {
  const currentDate = new Date();
  const estOptions = { timeZone: "America/New_York" };

  const currentHour = currentDate.toLocaleString("en-US", {
    ...estOptions,
    hour: "2-digit",
    hour12: false,
  });
  const currentMinute = currentDate.toLocaleString("en-US", {
    ...estOptions,
    minute: "2-digit",
  });
  return `${currentHour.padStart(2, "0")}:${currentMinute.padStart(2, "0")}`;
}
