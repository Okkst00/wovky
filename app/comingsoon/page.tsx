import { Metadata } from "next";
import ComingSoon from "../components/comingSoon";

export const metadata: Metadata = {
  title: "Wovky",
  description: "Favorable Web & UI UX Developer",
};

export default function ComingsoonPage() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
