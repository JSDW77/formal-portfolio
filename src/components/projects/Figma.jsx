import  '../../pages/styles.css'
import figmaLogo from '../../img/Icons/Skills/Figma.png'
import gamers from '../../img/projects/next/Gamers.png'
import aviva from '../../img/projects/next/Aviva.png'
import space from '../../img/projects/react/space.png'
import NbaAll from '../../img/projects/node/NbaAllIn.png'
import {useTranslation} from 'react-i18next'
import ProjectModule from './ProjectModule'

const FigmaProjects = () =>{
    
    const [t] = useTranslation("global")
    const logoDeFigma = [figmaLogo]
    return(
        <div className='projects-page'>
            <div className='gallery'>
                <ProjectModule imagenes={logoDeFigma} projectImg={space} projectDescription={t("react.space.description")} projectName='Space portfolio' status={t("react.space.status")} link={t("react.space.link")}/>
                <ProjectModule imagenes={logoDeFigma} projectImg={gamers} projectDescription={t("next.gamersHeaven.description")} projectName='Gammers Heaven' status={t("next.gamersHeaven.status")} link={t("next.gamersHeaven.link")}/>
                <ProjectModule imagenes={logoDeFigma} projectImg={aviva} projectDescription={t("next.Aviva.description")} projectName='Aviva el fuego' status={t("next.Aviva.status")} link={t("next.Aviva.link")}/>
                <ProjectModule imagenes={logoDeFigma} projectImg={NbaAll} projectDescription={t("node.nbaScraper.description")} projectName='Nba all in' status={t("node.nbaScraper.status")} link={t("node.nbaScraper.link")}/>
            </div>
        </div>
    )
}

export default FigmaProjects