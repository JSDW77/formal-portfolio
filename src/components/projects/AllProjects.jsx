import  '../../pages/styles.css'
import reactLogo from '../../img/Icons/Skills/REACT.png'
import nodeLogo from '../../img/Icons/Skills/node.png'
import figmaLogo from '../../img/Icons/Skills/Figma.png'
import nextLogo from '../../img/Icons/Skills/Next.png'
import mongoLogo from '../../img/Icons/Skills/mongo.png'
import authLogo from '../../img/Icons/Skills/auth.png'
import fireLogo from '../../img/Icons/Skills/firebase.png'
import psLogo from '../../img/Icons/Skills/PS.png'
import gamers from '../../img/projects/next/Gamers.png'
import aviva from '../../img/projects/next/Aviva.png'
import space from '../../img/projects/react/space.png'
import NbaAll from '../../img/projects/node/NbaAllIn.png'
import {useTranslation} from 'react-i18next'
import ProjectModule from './ProjectModule'

const AllProjects = () =>{
    
    const [t] = useTranslation("global")
   

    // const projectList = {
    //    react:{
    //     space:['react','figma','ps'],
    //     nba:['react','figma','node'],
    //     aviva:['next','fire','ps','figma'],
    //     gamers:['node','auth','mongo','figma','next']
    //    }
    // }

    const imagenesGamers = [nextLogo,figmaLogo,nodeLogo,authLogo,mongoLogo]
    const imagenesAviva = [nextLogo,figmaLogo,psLogo,fireLogo]
    const imagenesSpace = [psLogo,figmaLogo,reactLogo]
    const imagenesNbaAllIn = [reactLogo,figmaLogo,nodeLogo]
    return(
        <div className='projects-page'>
            <div className='gallery'>
                <ProjectModule imagenes={imagenesSpace} projectImg={space} projectDescription={t("react.space.description")} projectName='Space portfolio' status={t("react.space.status")} link={t("react.space.link")} />
                <ProjectModule imagenes={imagenesNbaAllIn} projectImg={NbaAll} projectDescription={t("node.nbaScraper.description")} projectName='Nba all in' status={t("node.nbaScraper.status")} link={t("node.nbaScraper.link")}/>
                <ProjectModule imagenes={imagenesGamers} projectImg={gamers} projectDescription={t("next.gamersHeaven.description")} projectName='Gammers Heaven' status={t("next.gamersHeaven.status")} link={t("next.gamersHeaven.link")} />
                <ProjectModule imagenes={imagenesAviva} projectImg={aviva} projectDescription={t("next.Aviva.description")} projectName='Aviva el fuego' status={t("next.Aviva.status")} link={t("next.Aviva.link")}/>
            </div>
        </div>
    )
}

export default AllProjects