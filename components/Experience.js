import Link from "next/link";
const Resume = () => {
  return (
    <div className="section resume">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experiences</div>
            </div>
            <div className="resume-items">
              <div className="resume-item active">
                <div className="date">Février 2022 - Décembre 2022</div>
                <div className="name">Chargé d’assistance</div>
                <p>
                  Axa Services Maroc, leader mondial de l'assurance et de la gestion d'actifs,m'apporte un nouveau challenge côté relationnel.
                </p><br/>
                <Link
                  href="/entreprises/ipm-fr"
                  className="more"
                >
                  En savoir plus
                </Link>               
              </div>
              <div className="resume-item">
                <div className="date">Mars 2021 - Septembre 2021</div>
                <div className="name">télévendeur </div>
                <p>
                  Passionné par les techniques de vente, je rejoins Adm Value pour ma première expérience professionnelle.
                </p><br/>
                <Link
                  href="/entreprises/progmag"
                  className="more"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Diplômes</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">2019</div>
                <div className="name">Brevet de technicien spécialisé Développement informatique</div>
                <p>
                Développement d’applications  en HTML, CSS, Javascript et SQL.
              </p>
              </div>
              <div className="resume-item">
                <div className="date">2014</div>
                <div className="name">BACCALAUREAT - Lettre</div>
                <p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
