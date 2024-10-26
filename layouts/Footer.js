const Footer = () => {
  return (
    <footer>
      <div className="soc">
              <a target="_blank" href="https://www.linkedin.com/in/fay%C3%A7al-aqariden-6b7010156/">
          <span className="ion ion-social-linkedin" />
        </a>
      </div>
      <div className="copy">
        © {new Date().getFullYear()} FAYÇAL AQARIDEN. Tous droits réservés.
      </div>
      <div className="clr" />
    </footer>
  );
};
export default Footer;