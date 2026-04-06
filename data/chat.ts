export function createConnection(serverUrl: string, room: string) {
  return {
    connection() {
      console.log(`Connecting to ${room} room at ${serverUrl}...`);
    },
    disconnection() {
      console.log(`Disconnected to ${room} room at ${serverUrl}...`);
    },
  };
}
