import TheaterInvite from "@/components/theater/TheaterInvite";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const unresolvedSearchParams = await searchParams;
  const title = (unresolvedSearchParams?.title as string) || "Theater App - Get the Movie & TV Tracker";
  const description =
    (unresolvedSearchParams?.description as string) ||
    "Experience the next level of streaming with Theater App. Download now on Google Play.";
  const image = unresolvedSearchParams?.image as string;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image] : [],
    },
  };
}

export default function TVInvitePage() {
  return <TheaterInvite />;
}
