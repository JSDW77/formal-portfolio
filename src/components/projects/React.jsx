import  '../../pages/styles.css'
import reactLogo from '../../img/Icons/Skills/REACT.png'
import figmaLogo from '../../img/Icons/Skills/Figma.png'
import psLogo from '../../img/Icons/Skills/PS.png'
import nodeLogo from '../../img/Icons/Skills/node.png'
import space from '../../img/projects/react/space.png'
import NbaAll from '../../img/projects/node/NbaAllIn.png'
import {useTranslation} from 'react-i18next'
import ProjectModule from './ProjectModule'

const ReactProjects = () =>{
    const imagenesSpace = [psLogo,figmaLogo,reactLogo]
    const imagenesNbaAllIn = [reactLogo,figmaLogo,nodeLogo]
    const [t] = useTranslation("global")

    return(
        <div className='projects-page'>
            <div className='gallery'>
                <ProjectModule imagenes={imagenesSpace} projectImg={space} projectDescription={t("react.space.description")} projectName='Space portfolio'/>
                <ProjectModule imagenes={imagenesNbaAllIn} projectImg={NbaAll} projectDescription={t("node.nbaScraper.description")} projectName='Nba all in'/>
            </div>
        </div>
    )
}

export default ReactProjects