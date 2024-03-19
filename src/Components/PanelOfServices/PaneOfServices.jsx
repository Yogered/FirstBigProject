import style from './PaneOfServices.module.css';

function PaneOfServices() {
  return (
    <body className={style.BodyOfServices}>
      {/* <span className={style.Topic}>Services we offer</span> */}
      <h1 className={style.Topic}>Services we offer</h1>
      <div className={style.CardRotate}>

        {/* 1 */}
      <div className={style.CardOfServices}>
          <img src="" alt="" />
          <h3>Web Design & Development</h3>
          <span>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </span>
        </div>
        {/* 2 */}
        <div className={style.CardOfServices}>
          <img src="" alt="" />
          <h3>Web Design & Development</h3>
          <span>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </span>
        </div>
        {/* 3 */}
        <div className={style.CardOfServices}>
          <img src="" alt="" />
          <h3>Web Design & Development</h3>
          <span>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </span>
        </div>
        {/* 4 */}
        <div className={style.CardOfServices}>
          <img src="" alt="" />
          <h3>Web Design & Development</h3>
          <span>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </span>
        </div>
        {/* 5 */}
        <div className={style.CardOfServices}>
          <img src="" alt="" />
          <h3>Web Design & Development</h3>
          <span>
            A Website is an extension of yourself and we can help you to express
            it properly. Your website is your number one marketing asset because
            we live in a digital age.
          </span>
        </div>





      </div>
      <div></div>
    </body>
  );
}

export default PaneOfServices;