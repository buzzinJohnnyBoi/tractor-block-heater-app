import axios from "axios";

const blockerHeaterAddress = process.env.BLOCK_HEATER_IP;
const onMessage = "RELAY ON";
const offMessage = "RELAY OFF";

export default async function findCurrentState() {
  try {
    const response = await axios.get(`http://${blockerHeaterAddress}/status`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });

    if (response.data.includes(onMessage)) {
      return "ON";
    } else if (response.data.includes(offMessage)) {
      return "OFF";
    }
  } catch (error) {
    console.error(error);
  }
  return "ERROR";
}
