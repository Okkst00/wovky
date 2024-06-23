"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Portfolio = {
  id: number;
  title: string;
  image: string;
  category: string;
  project: string;
  env: string;
};

const PortfolioItem: React.FC<{ id: number }> = ({ id }) => {
  const [portfolioItem, setPortfolioItem] = useState<Portfolio | null>(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const res = await fetch("/data/portfolio.json");
      const data: Portfolio[] = await res.json();
      const item = data.find((portfolio) => portfolio.id === id);
      setPortfolioItem(item || null);
    };

    fetchPortfolio();
  }, [id]);

  if (!portfolioItem) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col col-5">
        <Image
          src={portfolioItem.image}
          alt={portfolioItem.title}
          width={226}
          height={102}
          className="img-fluid rounded-4"
          style={{ objectFit: "cover", aspectRatio: 16 / 9 }}
        ></Image>
        <div
          className="fw-semibold px-2 py-1 rounded-top-2 rounded-bottom-1 bg-warning"
          style={{
            position: "absolute",
            bottom: "-2px",
            left: "12px",
            fontSize: "12px",
          }}
        >
          {portfolioItem.env}
        </div>
      </div>
      <div className="col col-7 p-0 d-flex align-items-center">
        <div className="wrapCont">
          <div className="fw-medium " style={{ fontSize: "12px" }}>
            {portfolioItem.project}
          </div>
          <div className="fw-bold mb-1" style={{ fontSize: "16px" }}>
            {portfolioItem.title}
          </div>
          <div className="fw-medium" style={{ fontSize: "14px" }}>
            {portfolioItem.category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
