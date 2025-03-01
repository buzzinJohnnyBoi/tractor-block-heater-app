"use server";

import axios from "axios";
import db from "@/server/database/db";
import { actionLogs, NewActionLog } from "@/server/database/schema";

const blockerHeaterAddress = process.env.BLOCK_HEATER_IP;

export default async function ChangeState(user: string, state: "ON" | "OFF") {
  console.log("Changing state to", state);
  if (!user) {
    return "Please enter your name so big brother knows who you are";
  }
  try {
    const endpoint = state === "ON" ? "/H" : "/L";
    const response = await axios.get(
      `http://${blockerHeaterAddress}${endpoint}`,
      {
        headers: { "Access-Control-Allow-Origin": "*" },
      }
    );
    if (response.status !== 200) {
      throw new Error(`Failed to change state to ${state.toLowerCase()}`);
    }
    const log: NewActionLog = {
      user,
      action: state,
    };
    await db.insert(actionLogs).values(log);
  } catch (error) {
    console.error(error);
    return "An error occurred";
  }
}
