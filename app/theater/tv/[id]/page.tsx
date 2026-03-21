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
  const title = (unresolvedSearchParams?.t as string) || "Theater App - Get the Movie & TV Tracker";
  const description = "Experience the next level of streaming with Theater App. Download now on Google Play.";
  
  const posterPath = unresolvedSearchParams?.p as string;
  const image = posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : undefined;

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
