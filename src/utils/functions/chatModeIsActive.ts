export function chatModeIsActive(searchParams?: { [key: string]: string | string[] | undefined }) {
  const chatHasStarted = searchParams?.chatMode;

  if (chatHasStarted === "true") {
    return true
  }

  return false;
}