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
                <a href=" " className={style.link} >About</a>
                <a href=" " className={style.link} >Services</a>
                <a href=" " className={style.link} >Case Studies</a>
                <a href=" " className={style.link} >Blog</a>
                <a href=" " className={style.link} >How it works</a>
                <a href=" " className={style.link} >Hire</a>
            </div>

            <div className={style.test}>
                <button>
                    Contact us
                </button>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  