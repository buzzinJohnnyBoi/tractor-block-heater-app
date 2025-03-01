"use client";

import { useRouter } from "next/navigation";
import deleteScheduledJob from "@/server/actions/removeScheduledJob";

export default function DeleteButton({ jobId }: { jobId: number }) {
  const router = useRouter();

  const deleteJob = async () => {
    await deleteScheduledJob(jobId);
    router.refresh();
  };
  return (
    <button className="p-2 bg-red-600 rounded" onClick={() => deleteJob()}>
      Remove
    </button>
  );
}
