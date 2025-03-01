import processScheduledJobs from "@/server/scheduler/processScheduledJobs";

export async function POST() {
  await processScheduledJobs();
  return Response.json({ message: "Scheduled jobs processed" });
}
