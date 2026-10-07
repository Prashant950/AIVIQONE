import { Metadata } from "next";
import ComingSoonClient from "./ComingSoonClient";

export const metadata: Metadata = {
  title: "Coming Soon | AIVIQONE",
  description:
    "This space is waiting for something awesome. Our intelligent sales dashboard is currently under active development.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
