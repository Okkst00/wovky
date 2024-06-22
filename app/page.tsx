import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import { Metadata } from "next";
import ComingSoon from "./components/comingSoon";

export const metadata: Metadata = {
  title: "Wovky",
  description: "Powerfull Web & UI UX Developer",
};

export default function Home() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
