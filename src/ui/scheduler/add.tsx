"use client";

import { useState } from "react";
import addScheduledJob from "@/server/actions/addScheduledJob";

export default function AddScheduledJob() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const timestamp = new Date(`${date}T${time}`);

    await addScheduledJob({
      timestamp,
      user: "admin",
      action: "ON",
      recurring: false,
    });
  };

  return (
    <div>
      <h2 className="text-2xl text-center underline my-6">Add Scheduled Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 justify-center">
          <div>
            <label className="p-2 text-lg">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="p-2 rounded text-gray-700"
            />
          </div>
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
          <button type="submit" className="p-2 rounded bg-blue-500 text-white">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
}
