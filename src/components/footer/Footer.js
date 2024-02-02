import React from "react";
import "./footer.css";
import footerLogo from "../assets/logo_big.png";
import instagramIcon from "../assets/instagram_icon.png";
import pinterestIcon from "../assets/pintester_icon.png";
import whatsAppIcon from "../assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={footerLogo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footerLinks">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footerSocialIcons">
        <div className="footerIconsContainer">
          <img src={instagramIcon} alt="" />
        </div>
        <div className="footerIconsContainer">
          <img src={pinterestIcon} alt="" />
        </div>
        <div className="footerIconsContainer">
          <img src={whatsAppIcon} alt="" />
        </div>
      </div>
      <div className="footerCopyright">
        <hr />
        <p>Copyright @ 2024</p>
      </div>
    </div>
  );
}
