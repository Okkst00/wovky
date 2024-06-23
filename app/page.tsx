import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/footer";
import { Metadata } from "next";
import ComingSoon from "./components/comingSoon";
import Navbar from "./components/navbar";
import Portfolio from "./components/portfolio";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Wovky",
  description: "Favorable Web & UI UX Developer",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <Portfolio /> */}
      <Footer />
    </>
  );
}
