// pages/coming-soon.tsx
"use client";
import styled from "@emotion/styled";
import Image from "next/image";

const LoaderBar = styled.div`
  width: 17%;
  height: 10px;
  background-color: #f0f0f0;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 20%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }
`;

const AnimatedBar = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 20px;

  background: -webkit-linear-gradient(
    right,
    #7816f5 0%,
    #540ab6 70%,
    #2b0062 100%
  );
  animation: slide 2s linear infinite alternate; /* Mengubah dari linear ke alternate untuk bolak-balik */

  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

const Loader = () => {
  return (
    <div className=" d-flex align-content-center align-items-center">
      <div className="container mx-auto mb-4">
        <div className="row justify-content-center mx-auto">
          <div className="col text-center">
            <LoaderBar className="mx-auto">
              <AnimatedBar></AnimatedBar>
            </LoaderBar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
