import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="footer__box">
          <div className="left">
            <img src="img/footer_logo.png" alt="Footer Logo" />
          </div>
          <div className="right">
            <ul className="list">
              <li><a href="#">企業理念</a></li>
              <li><a href="#">施工事例</a></li>
              <li><a href="#">採用情報</a></li>
              <li><a href="#">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          Copyright © 2020 Aono Corporation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
