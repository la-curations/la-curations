import TheaterInvite from "@/components/theater/TheaterInvite";
import { Metadata, ResolvingMetadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const title = "Theater App - Friends Invite";
  const description =
    "Join your friends on Theater App and compare your diary and watchlists.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function FriendsInvitePage() {
  return <TheaterInvite />;
}
