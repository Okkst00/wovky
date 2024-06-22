// pages/coming-soon.tsx
"use client";
import styled from "@emotion/styled";
import Image from "next/image";

const WrapLoader = styled.div`
  height: 100vh;
`;

const LoaderBar = styled.div`
  width: 36%;
  height: 10px;
  background-color: #f0f0f0;
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 80%;
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

const IconType = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const IconMain = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const MainTitle = styled.div`
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 500px) {
    font-size: 32px;
  }
`;

const ComingSoon = () => {
  return (
    <WrapLoader className=" d-flex align-content-center align-items-center loaders">
      <div className="container mx-auto  mb-5">
        <IconMain className="iconMain">
          <Image
            className="mx-auto d-flex justify-content-center"
            src={"/images/icon-main.png"}
            width={70}
            height={70}
            alt="image"
          ></Image>
        </IconMain>
        <div className="row justify-content-center mx-auto">
          <div className="col text-center">
            <MainTitle className=" fw-bold mb-4">Coming Soon...</MainTitle>
            <LoaderBar className="mx-auto">
              <AnimatedBar></AnimatedBar>
            </LoaderBar>
          </div>
        </div>
        <IconType className="iconType">
          <Image
            src={"/images/icon-type.png"}
            width={120}
            height={34}
            alt="image"
          ></Image>
        </IconType>
      </div>
    </WrapLoader>
  );
};

export default ComingSoon;
