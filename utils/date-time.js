export function nowToHHMM() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return `${hours}:${minutes.toString().padStart(2, "0")}`;
}
