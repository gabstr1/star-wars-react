import React, { FC } from "react";
import "./Loader.css";

const Loader:FC = () => {
  return (
    <div>
      <p className="loading-message">Loading...</p>
      <div className="loader">
        <div className="bar"/>
      </div>
    </div>
  );
};

export default Loader;
