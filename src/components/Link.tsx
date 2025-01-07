import React from 'react';

const Link: React.FC = () => {
  return (
    <section className="link">
      <div className="link__inner">
        <a href="#">
          <img src="img/company.png" alt="会社案内" />
        </a>
        <a href="#">
          <img src="img/recruit.png" alt="採用情報" />
        </a>
        <a href="#">
          <img src="img/contact.png" alt="お問い合わせ" />
        </a>
      </div>
    </section>
  );
};

export default Link;
