import cron from "node-cron";
import findOverdueScheduledJobs from "@/server/services/findOverdueScheduledJobs";

export function startScheduler() {
  cron.schedule("* * * * *", () => {
    processScheduledJobs();
  });
  console.log("Job scheduler started");
}

async function processScheduledJobs() {
  try {
    const jobs = await findOverdueScheduledJobs();
    jobs.forEach((job) => {
      console.log(`Processing job: ${job.id}`);
    });
  } catch (error) {}
}
