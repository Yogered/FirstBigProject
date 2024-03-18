import style from './FirstInfoPunel.module.css';

import HeroWrapper from './Hero-Wrapper__image.png';
function FirstInfoPunel() {
    return (
        <body>
            <div className={style.Conteiner}>
                <div className={style.InfoConteiner}>

                    <div className={style.Blockquote}>
                        <div><span className={style.Thin}>Great <span className={`${style.SettingsGradient} + ${style.FirstGradient}`}>Product</span> is</span></div> 
                        <div><b className={style.Bold}>built by great</b> <span  className={`${style.SettingsGradient} + ${style.SecondGradient}`}>teams</span></div>
                    </div>
                    
                    <span className={style.InfoText}>We help build and manage a team of world-class developers to bring your vision to life</span>
                    <button className={style.ButtonStart}>Let’s get started!</button>
                </div>

                <div>
                    <img src={HeroWrapper} alt="" />
                </div>
            </div>
        </body>
    );
}

export default FirstInfoPunel;