import { Metadata } from "next";
import Link from "next/link";
import Head from "next/head";
import "./not-found.css"; // Uncomment if you have CSS
import Loader from "../components/Loader";

export const metadata: Metadata = {
  title: "Wovky • Not Found",
  description: "Powerful Web & UI UX Developer",
};

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Powerful Web & UI UX Developer" />
      </Head>
      <div className="container notFound">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col text-center align-items-center">
            <Loader />
            <h1 className="notFoundTitle text-black fw-bold pb-3">
              Page Not Found!
            </h1>
            <div className=" mt-5">
              <Link
                className=" btn-show text-center px-5 py-3 rounded-5"
                href={"/"}
              >
                <i className="bi bi-arrow-down-circle-fill"></i> Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
