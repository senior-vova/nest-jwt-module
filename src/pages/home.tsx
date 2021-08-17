import React from "react";
import { MainWrapper } from "../components/MainWrapper";

const HomePage: React.FC = () => {
  return (
    <MainWrapper>
      <div className="py-3 d-flex flex-column align-items-center text-center">
        <h2>
          This library created for easy using auth system with MongoDB. Also in
          this library using JWT auth system.
        </h2>
      </div>
    </MainWrapper>
  );
};

export default HomePage;
