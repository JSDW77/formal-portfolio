import  '../../pages/styles.css'
import nodeLogo from '../../img/Icons/Skills/node.png'
import figmaLogo from '../../img/Icons/Skills/Figma.png'
import nextLogo from '../../img/Icons/Skills/Next.png'
import mongoLogo from '../../img/Icons/Skills/mongo.png'
import authLogo from '../../img/Icons/Skills/auth.png'
import reactLogo from '../../img/Icons/Skills/REACT.png'
import gamers from '../../img/projects/next/Gamers.png'
import NbaAll from '../../img/projects/node/NbaAllIn.png'
import {useTranslation} from 'react-i18next'
import ProjectModule from './ProjectModule'

const NodeProjects = () =>{
    
    const [t] = useTranslation("global")
    const imagenesGamers = [nextLogo,figmaLogo,nodeLogo,authLogo,mongoLogo]
    const imagenesNbaAllIn = [reactLogo,figmaLogo,nodeLogo]
    return(
        <div className='projects-page'>
            <div className='gallery'>
                <ProjectModule imagenes={imagenesGamers} projectImg={gamers} projectDescription={t("next.gamersHeaven.description")} projectName='Gammers Heaven' status={t("next.gamersHeaven.status")} link={t("next.gamersHeaven.link")}/>
                <ProjectModule imagenes={imagenesNbaAllIn} projectImg={NbaAll} projectDescription={t("node.nbaScraper.description")} projectName='Nba all in' status={t("node.nbaScraper.status")} link={t("node.nbaScraper.link")}/>
            </div>
        </div>
    )
}

export default NodeProjects