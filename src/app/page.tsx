import db from "@/server/database/db";

import { actionLogs } from "@/server/database/schema";

export default async function Home() {
  const result = await db.select().from(actionLogs);
  return <div>Hello</div>;
}
