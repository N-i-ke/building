import React from 'react';
import company from '../assets/company.png';
import recruit from '../assets/recruit.png';
import contact from '../assets/contact.png';

const Link: React.FC = () => {
  return (
    <section className="link">
      <div className="link__inner">
        <a href="#">
          <img src={company} alt="会社案内" />
        </a>
        <a href="#">
          <img src={recruit} alt="採用情報" />
        </a>
        <a href="#">
          <img src={contact} alt="お問い合わせ" />
        </a>
      </div>
    </section>
  );
};

export default Link;
