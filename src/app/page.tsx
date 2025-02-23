import DisplayLogs from "@/ui/log/displaylog";
import ChangeCurrentState from "@/ui/log/changeCurrentState";

import findCurrentState from "@/server/services/findCurrentState";

export default async function Home() {
  const currentState = await findCurrentState();
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center underline mb-4">Tractor App</h1>
      <ChangeCurrentState currentState={currentState} />
      <DisplayLogs />
    </div>
  );
}
