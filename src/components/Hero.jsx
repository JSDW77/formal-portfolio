import {useTranslation} from 'react-i18next'
import Avatar from '../img/Hero-img.png'
import sendIcon from '../img/contac-icon.png'

const Hero = () =>{
    const [t] = useTranslation("global")

    return(
        <div className='Hero-cont'>
            <div className='hero-left'>
                <h1>{t("hero.h1a")} <span>Julian Sosa.</span> {t("hero.h1b")} </h1>
                <div className='line'></div>
                <p>
                {t("hero.p")}
                </p>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=juliansosa.dw@gmail.com' target={'_blank'} rel='noreferrer'>
                <button>
                {t("hero.btn")}
                <img src={sendIcon} alt='send-icon'></img>
                
                </button>
                </a>
            </div>
            <div className='hero-right'>
                <img src={Avatar} alt='avatar'></img>
            </div>
        </div> 
   )
}

export default Hero