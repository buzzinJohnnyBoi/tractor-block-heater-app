import deleteScheduledJob from "../actions/removeScheduledJob";
import findScheduledJobsToRun from "../services/findScheduledJobsToRun";
import ChangeState from "../actions/changeState";

export default async function processScheduledJobs() {
  try {
    const jobs = await findScheduledJobsToRun();
    for (let i = 0; i < jobs.length; i++) {
      const job = jobs[i];
      console.log("Running job: ");
      console.log(job);
      await ChangeState(job.user, job.action);
      if (!job.recurring) {
        deleteScheduledJob(job.id);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
