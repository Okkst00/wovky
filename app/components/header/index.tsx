"use client";

import Image from "next/image";
import PortfolioHeader from "../Medium/portfolioHeader";

const Header: React.FC = () => {
  return (
    <>
      <div className="container my-5 py-5" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col col-6">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              tenetur aliquam repellendus?
            </h1>
          </div>
          <div className="col col-6" style={{ overflowX: "hidden" }}>
            <div
              className="row"
              style={{ position: "absolute", width: "450px" }}
            >
              <div className="wrapPort">
                <div className="col col-11 mb-3">
                  <div className="portList card border-0 p-2 rounded-4 shadow">
                    <PortfolioHeader id={1} />
                  </div>
                </div>
                <div className="col ms-5 col-11 mb-3">
                  <div className="portList card border-0 p-2 rounded-4 shadow">
                    <PortfolioHeader id={2} />
                  </div>
                </div>
                <div className="col ms-4 col-11 mb-3">
                  <div className="portList card border-0 p-2 rounded-4 shadow">
                    <PortfolioHeader id={3} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row ps-5 pt-2">
              <Image
                src="/images/trapelov.png"
                width={200}
                height={400}
                alt="image"
                className=" ms-5"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
