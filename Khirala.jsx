import React, { useEffect } from "react";
import "./khirala.css";

function Khirala() {
  useEffect(() => {
    const s = document.getElementById("stars");
    for (let i = 0; i < 40; i++) {
      const d = document.createElement("div");
      d.className = "star";
      d.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*4}s;animation-duration:${2+Math.random()*3}s`;
      s.appendChild(d);
    }
  }, []);

  return (
    <div className="dargah-page">
      <div className="geo-bg"></div>
      <div className="stars" id="stars"></div>

      {/* Crescent */}
      <svg className="crescent" width="60" height="70" viewBox="0 0 60 70" fill="none">
        <path d="M45 10 A28 28 0 1 0 45 60 A20 20 0 1 1 45 10Z" fill="#c9a84c"/>
        <polygon points="50,5 52,12 59,10 54,16 59,22 52,20 50,27 48,20 41,22 46,16 41,10 48,12" fill="#c9a84c"/>
      </svg>

      {/* ARCH HEADER */}
      <div className="arch-top">
        <svg className="arch-svg" viewBox="0 0 340 120" fill="none">
          <path d="M20 115 L20 60 Q20 10 90 10 L170 10 L250 10 Q320 10 320 60 L320 115" stroke="#c9a84c" strokeWidth="1.5" fill="none" opacity="0.7"/>
          <path d="M50 115 L50 70 Q50 35 110 35 L170 35 L230 35 Q290 35 290 70 L290 115" stroke="#e8d08a" strokeWidth="1" fill="none" opacity="0.45"/>
          <circle cx="170" cy="10" r="5" fill="#c9a84c" opacity="0.8"/>
          <line x1="20" y1="115" x2="320" y2="115" stroke="#c9a84c" strokeWidth="1" opacity="0.6"/>
        </svg>
        <div className="header-inner">
          <div className="dargah-name">Khirala Sharif</div>
          <div className="arabic-sub">خیرالہ شریف</div>
          <div className="tagline">Dargah-e-Khirala Sharif · Official Hub</div>
        </div>
        <div className="divider"><div className="divider-line"></div><div className="divider-diamond"></div><div className="divider-line"></div></div>
      </div>

      {/* CARDS */}
      <div className="cards-grid">
        <a className="social-card" href="https://www.youtube.com/@SBKHIRALAOFFICIAL" target="_blank" rel="noopener">
          <div className="card-corner tl"></div><div className="card-corner br"></div>
          <div className="icon-wrap icon-yt">▶</div>
          <div className="card-title">YouTube</div>
          <p className="card-desc">Ziyarat videos, dargah events aur official coverage dekhein</p>
          <span className="card-btn">Channel Dekhein</span>
        </a>
        <a className="social-card" href="https://www.instagram.com/sbkhiralaofficial/" target="_blank" rel="noopener">
          <div className="card-corner tl"></div><div className="card-corner br"></div>
          <div className="icon-wrap icon-ig">📷</div>
          <div className="card-title">Instagram</div>
          <p className="card-desc">Reels, photos aur rozana ke lamhe</p>
          <span className="card-btn">Page Kholen</span>
        </a>
        <a className="social-card" href="https://www.facebook.com/share/1Ky1MJvJqw/?mibextid=wwXIfr" target="_blank" rel="noopener">
          <div className="card-corner tl"></div><div className="card-corner br"></div>
          <div className="icon-wrap icon-fb">f</div>
          <div className="card-title">Facebook</div>
          <p className="card-desc">Announcements, events aur community updates</p>
          <span className="card-btn">Page Dekhein</span>
        </a>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Dargah-e-Khirala Sharif — Tamam Huqooq Mahfooz Hain
      </footer>
    </div>
  );
}
export default Khirala;
