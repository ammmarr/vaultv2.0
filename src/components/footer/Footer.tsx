import logo from "../../assets/logos/logo-white.png";
import { Link } from "react-router-dom";
import { mainRoutes, socialMediaLinks } from "../../routes";
import style from "./index.module.scss";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerContent}>
          <div className={style.footerFirst}>
            <img src={logo} alt="resturants Logo" />
          </div>
          <div className={style.footerMiddle}>
            {mainRoutes.map((link, i) => (
              <Link to={link.href} key={i}>
                {link.name}
              </Link>
            ))}{" "}
          </div>
          {/* {% for news in category %} */}
          <div className={style.footerLast}>
            <h3>Connect with Vault</h3>
            <div className={style.linksContainer}>
              {socialMediaLinks.map((link, i) => (
                <div key={i} className={style.smLinkContainer}>
                  <a className={style.smLinks} href={link.href} target="_blank">
                    {link.icon}{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.poweredBySection}>
        {/* <a href="https://amirrushdy.wixsite.com/tazzweed/terms">
          {" "}
          Terms of use
        </a> */}
        <Link to="/terms-of-use"> Terms of use</Link>

        <Link to="/cookies"> Cookies</Link>
        <Link to="/privacy-policy"> Privacy Policy</Link>
      </div>
      <div className={style.poweredBySection}>
        <p>
          {" "}
          <a href="https://jirlie.com/">
            {" "}
            Powered by Jirlie Enterprise, digital business transformation
            solution
          </a>
        </p>
        <p>Registered from the Trade Register No.: 18805</p>

        <p>
          National establishment number: Unified commercial registry number
          (10530 00001 88050)
        </p>
      </div>
    </>
  );
};

export default Footer;
