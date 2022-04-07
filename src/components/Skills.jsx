import {useTranslation} from 'react-i18next'
import SkillsTree from '../img/Skills.png'


const Skills = () =>{
    const [t] = useTranslation("global")

    return(
        <div id='Skill-cont'>
            <div className='Skill-title-cont'>
                <div className='Skill-line-cont'>
                    <div className='Skill-line'></div>
                    <div className='Skill-dot'></div>
                </div>
                <h2>{t("skill.title")}</h2>
            </div>
            <div className='Skill-description-cont'>
                <div className='Skill-left'>
                    <div className='Skill-left-top'>
                        <h3>{t("skill.h3a")}</h3>
                        <p>{t("skill.pa")}</p>
                        <br></br>
                        <p>{t("skill.pb")}</p>
                    </div>
                    <div className='Skill-left-line'></div>
                    <div className='Skill-left-bot'>
                    <h3>{t("skill.h3b")}</h3>
                    <p>{t("skill.pc")}</p>
                    </div>
                </div>
                <div className='Skill-right'>
                    <img src={SkillsTree} alt="Arbol de habilidades" />
                </div>
            </div>
        </div> 
   )
}

export default Skills