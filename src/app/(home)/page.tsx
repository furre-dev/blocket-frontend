import HomeComponent from "@/components/HomeComponent";
import { chatModeIsActive } from "@/utils/functions/chatModeIsActive";

export default function Home({ searchParams, }: { searchParams?: { [key: string]: string | string[] | undefined }; }) {
  const chatMode = chatModeIsActive(searchParams);

  return (
    <HomeComponent
      chatMode={chatMode}
    />);
}

