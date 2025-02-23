import findLogs from "@/server/services/findLog";

export default async function DisplayLogs() {
  const logs = await findLogs();
  return (
    <div className="text-center text-lg">
      <h2 className="text-2xl font-bold mb-4">Logs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="border-b text-white">
            <tr>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">User</th>
              <th className="px-6 py-4">Event</th>
            </tr>
          </thead>
          <tbody id="logList" className="divide-y divide-gray-200">
            {logs.map((log) => (
              <tr key={log.id}>
                <td className="px-6 py-4">
                  {log.timestamp.toLocaleDateString()}{" "}
                  {log.timestamp.toLocaleTimeString()}
                </td>
                <td className="px-6 py-4">{log.user}</td>
                <td className="px-6 py-4">{log.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
