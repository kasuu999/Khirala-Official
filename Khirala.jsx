import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import "./khirala.css";

function Khirala() {
  return (
    <div
      className="khirala-bg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.jpg"})`,
      }}
    >
      <div className="overlay">

        {/* HEADER */}
        <header className="header">
          <h1>Khirala Sharif</h1>
          <p>Dargah-e-Khirala Sharif | Official Social Media Hub</p>
        </header>

        {/* SOCIAL MEDIA SECTIONS */}
        <div className="social-container">

          {/* YouTube */}
          <div className="card">
            <FaYoutube className="icon yt" />
            <h2>YouTube Channel</h2>
            <p>Watch ziyarat videos, dargah events, and official coverage.</p>
            <a href="https:/https://www.youtube.com/@SBKHIRALAOFFICIAL" target="_blank">Visit YouTube</a>
          </div>

          {/* Instagram */}
          <div className="card">
            <FaInstagram className="icon insta" />
            <h2>Instagram Page</h2>
            <p>Reels, photos, and daily moments from Khirala Sharif.</p>
            <a href="https://https://www.instagram.com/sbkhiralaofficial/" target="_blank">Open Instagram</a>
          </div>

          {/* Facebook */}
          <div className="card">
            <FaFacebook className="icon fb" />
            <h2>Facebook Page</h2>
            <p>Announcements, events, and community updates.</p>
            <a href="https://www.facebook.com/share/1Ky1MJvJqw/?mibextid=wwXIfr" target="_blank">Visit Facebook</a>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="footer">
          © {new Date().getFullYear()} Khirala Sharif — All Rights Reserved.
        </footer>

      </div>
    </div>
  );
}

export default Khirala;
