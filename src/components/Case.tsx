import React from 'react';
import more from '../assets/more.png';
import firstbuild from '../assets/building1.png';
import secbuild from '../assets/building2.png';

const Case: React.FC = () => {
  return (
    <section className="case">
      <div className="case__inner">
        <div className="title">施工事例</div>
        <div className="case__box">
          <div className="case">
            <figure>
              <img src={firstbuild} alt="M様邸新築工事" />
            </figure>
            <h3 className="sub__title">M様邸新築工事</h3>
            <p className="pre">埼玉県</p>
            <div className="look">
              <a href="#">
                <img src={more} alt="詳細を見る" />
              </a>
            </div>
          </div>
          <div className="case">
            <figure>
              <img src={secbuild} alt="スカイビル" />
            </figure>
            <h3 className="sub__title">スカイビル</h3>
            <p className="pre">東京都</p>
            <div className="look">
              <a href="#">
                <img src={more} alt="詳細を見る" />
              </a>
            </div>
          </div>
        </div>
        <div className="button">
          <a href="#">施工実績一覧</a>
        </div>
      </div>
    </section>
  );
};

export default Case;
