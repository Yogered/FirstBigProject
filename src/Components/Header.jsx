import style from './Header.module.css';

import logo from './Vector.png'
function Header() {
    return (
      <header className={style.Header}>
        <div className={style.HeaderContainer}>
            <div className={style.test}>
                <img src={logo} alt="Logo" />
                <span>Develop</span>
            </div>

            <div>
                <a href=" " className={style.HeaderLink}>About</a>
                <a href=" " className={style.HeaderLink}>Services</a>
                <a href=" " className={style.HeaderLink}>Case Studies</a>
                <a href=" " className={style.HeaderLink}>Blog</a>
                <a href=" " className={style.HeaderLink}>How it works</a>
                <a href=" " className={style.HeaderLink}>Hire</a>
            </div>

            <div className={style.test}>
                <button className={style.ButtonContact}>
                    Contact us
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  