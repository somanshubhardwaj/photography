import React from "react";
import "./main.css";
import img1 from "./assets/IMG_1239.jpeg";
import img3 from "./assets/photo1707070569-2.jpg";
import img2 from "./assets/pexels-pixabay-531880.jpg";
import img4 from "./assets/photo1707070569-2.jpg";
import img5 from "./assets/IMG_3286.jpeg";
import img6 from "./assets/photo1707070569-2.jpg";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <h1>ReactJS</h1>
        </div>
        <div className="grid">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
