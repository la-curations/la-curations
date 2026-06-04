import TheaterInvite from "@/components/theater/TheaterInvite";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { searchParams }: Props,
): Promise<Metadata> {
  const unresolvedSearchParams = await searchParams;
  const title =
    (unresolvedSearchParams?.t as string) ||
    "Theater App - Friends Invite";
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
