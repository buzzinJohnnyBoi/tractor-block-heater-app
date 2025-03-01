"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import addScheduledJob from "@/server/actions/addScheduledJob";

export default function AddScheduledJob({ user }: { user: string }) {
  const [time, setTime] = useState<string>("");
  const [action, setAction] = useState<"ON" | "OFF">("ON");
  const [recurring, setRecurring] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await addScheduledJob({
      time,
      user,
      action,
      recurring,
    });

    if (response.error) {
      setError(response.message);
      return;
    }
    setError(null);

    router.refresh();
  };

  return (
    <div>
      <h2 className="text-2xl text-center underline my-6">Add Scheduled Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 justify-center">
          <div>
            <label className="p-2 text-lg">Time</label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="p-2 rounded text-gray-700 w-[150px]"
            />
          </div>
          <div className="p-1">
            <label className="p-2 text-lg">Action</label>
            <select
              id="action"
              value={action}
              onChange={(e) => setAction(e.target.value as "ON" | "OFF")}
              required
              className="p-2 rounded text-gray-700"
            >
              <option value="ON">ON</option>
              <option value="OFF">OFF</option>
            </select>
          </div>
          <div className="p-1">
            <label className="p-2 text-lg">Recurring</label>
            <select
              id="recurring"
              value={recurring ? "YES" : "NO"}
              onChange={(e) => setRecurring(e.target.value === "YES")}
              required
              className="p-2 rounded text-gray-700"
            >
              <option value="YES">YES</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <button type="submit" className="p-2 rounded bg-blue-500 text-white">
            Add Job
          </button>
        </div>
      </form>
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
    </div>
  );
}
