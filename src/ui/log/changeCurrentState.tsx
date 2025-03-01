"use client";

import ChangeState from "@/server/actions/changeState";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AddScheduledJob from "../scheduler/add";

export default function ChangeCurrentStateAddScheduledJob({
  currentState,
}: Readonly<{ currentState: "ON" | "OFF" | "ERROR" }>) {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const saveUsername = () => {
    localStorage.setItem("username", username);
  };

  const turnOn = async () => {
    saveUsername();
    const result = await ChangeState(username, "ON");
    if (result) {
      setError(result);
    } else {
      setError(null);
      router.refresh();
    }
  };

  const turnOff = async () => {
    saveUsername();
    const result = await ChangeState(username, "OFF");
    if (result) {
      setError(result);
    } else {
      setError(null);
      router.refresh();
    }
  };

  return (
    <div>
      <div className="text-center m-2">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <div className="flex items-center">
              <span className="mr-2 text-3xl">Hello,</span>
              <input
                type="text"
                id="usernameInput"
                className="px-4 py-3 rounded-lg text-3xl text-black"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">
            Tractor Block Heater Current State: {currentState}
          </h2>
        </div>

        <button
          className="bg-green-500 hover:bg-green-600 disabled:bg-gray-600 py-2 px-4 text-2xl m-2 rounded-lg text-white"
          onClick={turnOn}
          disabled={currentState === "ON"}
        >
          TURN ON
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 disabled:bg-gray-600 py-2 px-4 text-2xl m-2 rounded-lg text-white"
          onClick={turnOff}
          disabled={currentState === "OFF"}
        >
          TURN OFF
        </button>

        {error && (
          <p className="bg-red-500 p-4 rounded-lg text-white text-xl mt-4">
            {error}
          </p>
        )}
      </div>
      <div className="border-t border-gray-300 my-6" />
      <AddScheduledJob user={username} />
    </div>
  );
}
