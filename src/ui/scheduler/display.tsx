import db from "@/server/database/db";
import { scheduledJobs } from "@/server/database/schema";
import DeleteButton from "./deleteButton";

export default async function DisplayScheduledJobs() {
  const jobs = await db
    .select()
    .from(scheduledJobs)
    .orderBy(scheduledJobs.time);

  return (
    <div className="text-center text-lg">
      <h2 className="text-2xl font-bold mb-4">Existing Scheduled Jobs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b text-white">
            <tr>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Action</th>
              <th className="px-6 py-4">Recurring</th>
              <th className="px-6 py-4">Remove</th>
            </tr>
          </thead>
          <tbody id="jobList" className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id}>
                <td className="px-6 py-4">{job.time}</td>
                <td className="px-6 py-4">{job.user}</td>
                <td className="px-6 py-4">{job.action}</td>
                <td className="px-6 py-4">{job.recurring ? "Yes" : "No"}</td>
                <td className="px-6 py-4">
                  <DeleteButton jobId={job.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
