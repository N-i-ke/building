import React from 'react';

const News: React.FC = () => {
  return (
    <section className="news">
      <div className="news__inner">
        <div className="news__box">
          <div className="title">お知らせ</div>
          <ul className="news__list">
            <li>
              <div className="left__box">
                <p className="time">2020.11.17</p>
                <p className="box">お知らせ</p>
              </div>
              <p className="text">本社打合せ室が完成しました。</p>
            </li>
            <li>
              <div className="left__box">
                <p className="time">2020.11.10</p>
                <p className="box">お知らせ</p>
              </div>
              <p className="text">【メディア掲載】住宅雑誌2020年11月号</p>
            </li>
            <li>
              <div className="left__box">
                <p className="time">2020.11.01</p>
                <p className="box">お知らせ</p>
              </div>
              <p className="text">ホームページが完成しました。</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
