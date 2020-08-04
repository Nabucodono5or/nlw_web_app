import React from "react";
import { Link } from "react-router-dom";
import landingImg from "../../assets/images/landing.svg";
import logoImg from "../../assets/images/logo.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import pupperHeartIcon from "../../assets/images/icons/purple-heart.svg";
import "./style.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua platoforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>

        <div className="total-conexoes">
          <span>
            Total de 200 conexões realizadas
            <img src={pupperHeartIcon} alt="coração roxo" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
