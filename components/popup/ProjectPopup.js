"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      <div className="content">
        <div className="image">
          <img src="images/clients/client_1.png" alt="" />
        </div>
        <div className="desc">
          <div className="category">Catégorie</div>
          <h4>Titre</h4>
          <p>
            Description projet
          </p>
          <a href="#" className="btn" data-text="Voir projet">
            Voir projet
          </a>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
