export const dynamic = "force-dynamic";

import DisplayScheduledJobs from "@/ui/scheduler/display";
import DisplayLogs from "@/ui/log/displaylog";
import ChangeCurrentStateAddScheduledJob from "@/ui/log/changeCurrentState";

import findCurrentState from "@/server/services/findCurrentState";

export default async function Home() {
  const currentState = await findCurrentState();
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-center underline mb-6">
        Tractor Block Heater App
      </h1>
      <ChangeCurrentStateAddScheduledJob currentState={currentState} />
      <div className=" my-6" />
      <DisplayScheduledJobs />
      <div className="border-t border-gray-300 my-6" />
      <DisplayLogs />
    </div>
  );
}
