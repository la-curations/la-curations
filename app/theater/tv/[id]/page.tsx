import TheaterInvite from "@/components/theater/TheaterInvite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Theater App - Get the Movie & TV Tracker",
  description: "Experience the next level of streaming with Theater App. Download now on Google Play.",
};

export default function TVInvitePage() {
  return <TheaterInvite />;
}
