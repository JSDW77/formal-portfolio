import  '../../pages/styles.css'
import nodeLogo from '../../img/Icons/Skills/node.png'
import figmaLogo from '../../img/Icons/Skills/Figma.png'
import nextLogo from '../../img/Icons/Skills/Next.png'
import mongoLogo from '../../img/Icons/Skills/mongo.png'
import authLogo from '../../img/Icons/Skills/auth.png'
import fireLogo from '../../img/Icons/Skills/firebase.png'
import psLogo from '../../img/Icons/Skills/PS.png'
import gamers from '../../img/projects/next/Gamers.png'
import aviva from '../../img/projects/next/Aviva.png'
import {useTranslation} from 'react-i18next'
import ProjectModule from './ProjectModule'

const NextProjects = () =>{
    
    const [t] = useTranslation("global")
    const imagenesGamers = [nextLogo,figmaLogo,nodeLogo,authLogo,mongoLogo]
    const imagenesAviva = [nextLogo,figmaLogo,psLogo,fireLogo]
    return(
        <div className='projects-page'>
            <div className='gallery'>
                <ProjectModule imagenes={imagenesGamers} projectImg={gamers} projectDescription={t("next.gamersHeaven.description")} projectName='Gammers Heaven' status={t("next.gamersHeaven.status")} link={t("next.gamersHeaven.link")}/>
                <ProjectModule imagenes={imagenesAviva} projectImg={aviva} projectDescription={t("next.Aviva.description")} projectName='Aviva el fuego' status={t("next.Aviva.status")} link={t("next.Aviva.link")}/>
            </div>
        </div>
    )
}

export default NextProjects