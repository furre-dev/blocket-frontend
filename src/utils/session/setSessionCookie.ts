export async function setSessionCookie() {
  await fetch("http://localhost:3000/api/create-session");
}