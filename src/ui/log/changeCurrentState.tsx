"use client";

import {
  ChangeStateToOff,
  ChangeStateToOn,
} from "@/server/actions/changeState";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChangeCurrentState({
  currentState,
}: Readonly<{ currentState: "ON" | "OFF" | "ERROR" }>) {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const turnOn = () => {
    ChangeStateToOn(username);
    router.refresh();
  };

  const turnOff = () => {
    ChangeStateToOff(username);
    router.refresh();
  };

  return (
    <div className="text-center">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="flex items-center">
            <span className="mr-2 text-2xl">Hello,</span>
            <input
              type="text"
              id="usernameInput"
              className="px-4 py-3 rounded-lg text-lg text-black"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">
          Current State: {currentState}
        </h2>
      </div>

      <button
        className="bg-green-500 py-2 px-4 text-lg m-2 rounded-lg text-white"
        onClick={turnOn}
      >
        ON
      </button>
      <button
        className="bg-red-500 py-2 px-4 text-lg m-2 rounded-lg text-white"
        onClick={turnOff}
      >
        OFF
      </button>
    </div>
  );
}
