"use client";
import { useEffect } from "react";
import Typed from "typed.js";

// To add soc icon under subtitle
/*
          <div className="homesoc">
              <a target="_blank" href="https://www.linkedin.com/in/fay%C3%A7al-aqariden-6b7010156/">
                  <span className="ion ion-social-linkedin" />
              </a>
          </div>
*/

const Hero = ({ mouse }) => {
  useEffect(() => {
    new Typed(".typed-subtitle", {
      strings: ["Software - Hardware.", "Technicien Dev Web.","Conseiller Client."],
      loop: true,
      typeSpeed: 110,
    });
  }, []);
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="FAYÇAL AQARIDEN">
              <span>FAYÇAL AQARIDEN</span>
            </div>
            <span className="typed-subtitle" />
          </div>
          
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span class="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
