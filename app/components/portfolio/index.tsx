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

const Portfolio: React.FC = () => {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

  useEffect(() => {
    const fetchCoupons = async () => {
      const res = await fetch("/data/portfolio.json");
      const data = await res.json();
      setPortfolio(data);
    };

    fetchCoupons();
  }, []);

  return (
    <>
      <div className="container">
        {portfolio.map((item) => (
          <div className="card" key={item.id}>
            <Image
              src={item.image}
              alt={item.title}
              width={226}
              height={102}
              className="img-fluid"
            ></Image>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Portfolio;
