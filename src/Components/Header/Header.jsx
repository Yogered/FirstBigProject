import style from './Header.module.css';

import logo from './Vector.png'
function Header() {
    return (
      <header className={style.Header}>
        <div className={style.HeaderContainer}>
          <div className={style.CenterLogo}>
            <img src={logo} alt="Logo" />
            <span className={style.TextLogo}>Develop</span>
          </div>

          <div>
            <a href=" " className={style.HeaderLinks}>
              About
            </a>
            <a href=" " className={style.HeaderLinks}>
              Services
            </a>
            <a href=" " className={style.HeaderLinks}>
              Case Studies
            </a>
            <a href=" " className={style.HeaderLinks}>
              Blog
            </a>
            <a href=" " className={style.HeaderLinks}>
              How it works
            </a>
            <a href=" " className={style.HeaderLinks}>
              Hire
            </a>
          </div>

          <div>
            <button className={style.ButtonContact}>Contact us</button>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  