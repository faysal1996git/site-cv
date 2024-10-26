const Apropos = () => {
    return (
      <div className="section apropos section_" id="a-propos">
        <div className="content">
          <div className="title">
            <div className="title_inner">A propos</div>
          </div>
          <div className="image">
            <img src="images/photo.jpg" alt="" />
          </div>
          <div className="desc">
            <p>
              Après plusieurs expériences entant que conseiller client , <strong>je souhaite relever de nouveaux défis</strong>.
              <br/>
              Doué d'un parcours axé sur le support client ou technique, mon expérience professionelle m'a fait découvrir une nouvelle passion : Le <strong>management</strong>.
              <br/>
              J'ai eu le plaisir de superviser sur un service de 10 personnes.
              <br/>
              Je reste <strong>disponible et à l'écoute pour toute offre intéressante</strong>.
            </p>
            <p>
              N'hésitez pas à me contacter !
            </p>
            <div className="info-list">
              <ul>
                <li>
                  <strong>Nom:</strong> FAYÇAL AQARIDEN
                </li>
                <li>
                  <strong>Âge:</strong> 27 ans
                </li>
                <li>
                  <strong>Domaine:</strong> Informatique
                </li>
                <li>
                  <strong>Nationalité:</strong> Marocain
                </li>
                <li>
                  <strong>Résidence:</strong> Rabat
                </li>
                <li>
                  <strong>E-mail:</strong> faysalaqariden@gmail.com
                </li>
              </ul>
            </div>
            <div className="bts">
              <a href="C:\Users\fay\Desktop\site\test\public\documents\CV_Fayçal_Aqariden.pdf" download className="btn fill" data-text="Télécharger CV">
                    <span>Télécharger CV</span>
              </a>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    );
  };
  export default Apropos;
  