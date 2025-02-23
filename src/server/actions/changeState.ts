"use server";

import axios from "axios";
import db from "@/server/database/db";
import { actionLogs, NewActionLog } from "@/server/database/schema";

const blockerHeaterAddress = process.env.BLOCK_HEATER_IP;

export async function ChangeStateToOff(user: string) {
  try {
    const response = await axios.get(`http://${blockerHeaterAddress}/L`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    if (response.status !== 200) {
      throw new Error("Failed to change state to off");
    }
    const log: NewActionLog = {
      user,
      action: "off",
    };
    await db.insert(actionLogs).values(log);
  } catch (error) {
    console.error(error);
    return "An error occurred";
  }
}

export async function ChangeStateToOn(user: string) {
  try {
    const response = await axios.get(`http://${blockerHeaterAddress}/H`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    if (response.status !== 200) {
      throw new Error("Failed to change state to on");
    }
    const log: NewActionLog = {
      user,
      action: "on",
    };
    await db.insert(actionLogs).values(log);
  } catch (error) {
    console.error(error);
    return "An error occurred";
  }
}
