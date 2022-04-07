import {useTranslation} from 'react-i18next'
import reactImg from '../img/project-react.png'
import nextImg from '../img/project-next.png'
import nodeImg from '../img/project-node.png'
import figmaImg from '../img/project-figma.png'
import inIcon from '../img/in-icon.png'
import twtIcon from '../img/twt-icon.png'
import hubIcon from '../img/hub-icon.png'
import insIcon from '../img/ins-icon.png'
import mailIcon from '../img/mail-icon.png'
import { Link } from 'react-router-dom'

const Projects = (props) =>{

    
    const [t] = useTranslation("global")


    const ProjectModule = (props) =>{
    
        return (
            <div className= {props.brillo} onClick={()=>props.setEstado(false)}>
                  <Link to={`/Projects/${props.name}`}><img src={props.imagen} alt="logo de react js" /></Link>
            </div>
        )
    }


    return(

        <div className='Projects-section'>
           <div className='Skill-title-cont'>
                <div className='Skill-line-cont'>
                    <div className='Skill-line'></div>
                    <div className='Skill-dot'></div>
                </div>
                <h2>{t("project.title")}</h2>
            </div>
            <div className='Projects-cont'>
                <div className='Projects-cont-2'>
                    <ProjectModule imagen={nextImg} brillo='Projects-module nextGlow' name='Next' estado={props.estado} setEstado={props.setEstado}/>
                    <ProjectModule imagen={nodeImg} brillo='Projects-module nodeGlow' name='Node' estado={props.estado} setEstado={props.setEstado}/>
                    <ProjectModule imagen={figmaImg} brillo='Projects-module figmaGlow' name='Figma' estado={props.estado} setEstado={props.setEstado}/>
                    <ProjectModule imagen={reactImg} brillo='Projects-module reactGlow' name='React' estado={props.estado} setEstado={props.setEstado}/>
                </div>
            </div>
            <footer>
                <div className='icos-cont'>
                <a href='https://mail.google.com/mail/?view=cm&fs=1&to=juliansosa.dw@gmail.com' target={'_blank'} rel='noreferrer'>
                   <img src={mailIcon} alt="mail icon"/>
                </a>
                <a href='https://twitter.com/JulianDW77' target={'_blank'} rel='noreferrer'>
                    <img src={twtIcon} alt="twiter icon"/>
                </a>
                <a href='https://github.com/JSDW77' target={'_blank'} rel='noreferrer'>
                    <img src={hubIcon} alt="github icon"/>
                </a> 
                <a href='https://www.instagram.com/julisosa.77/' target={'_blank'} rel='noreferrer'>   
                    <img src={insIcon} alt="instagram icon"/>
                </a>    
                    <a href='https://www.linkedin.com/in/julian-sosa-901728229/' target={'_blank'} rel='noreferrer'>
                    <img src={inIcon} alt="linkedin icon"/>
                    </a>
                </div>
                <h5>Copyright © 2022 | JSDW</h5>
            </footer>
        </div> 
    
   )
}

export default Projects