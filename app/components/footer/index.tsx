// components/Footer.tsx
/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";

const footerStyle = css`
  background-color: #f8f9fa;
  padding: 1rem 0;
  text-align: center;

  @media (min-width: 576px) {
    padding: 1.5rem 0;
  }

  @media (min-width: 768px) {
    padding: 2rem 0;
    text-align: left;
  }

  @media (min-width: 992px) {
    padding: 2.5rem 0;
  }

  @media (min-width: 1200px) {
    padding: 3rem 0;
  }
`;

const Footer: React.FC = () => {
  return (
    <footer css={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} My Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
