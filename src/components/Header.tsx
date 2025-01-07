import React, { useState } from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header__wrap">
      <header>
        <div className="header__inner">
          <div className="top__box">
            {/* ロゴ部分 */}
            <div className="left">
              <a href="#">
                <img src="img/header_logo.png" alt="Logo" />
              </a>
            </div>
            {/* ハンバーガーメニュー */}
            <div className="right">
              <button
                className="menu-btn"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="メニューを開閉"
              >
                <i className={`fa ${menuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
              </button>
              <nav className={`globalMenu ${menuOpen ? 'is-active' : ''}`}>
                <ul>
                  <li><a href="#">企業理念</a></li>
                  <li><a href="#">施工事例</a></li>
                  <li><a href="#">採用情報</a></li>
                  <li><a href="#">お問い合わせ</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <p className="main__text">街を作る。未来を作る。</p>
    </div>
  );
};

export default Header;
