import arrowIcon from '../../img/Icons/Others/arrow.png'
import {useTranslation} from 'react-i18next'


const ProjectModule = (props) =>{

    const [t] = useTranslation("global")
    return(
        <div className='projectModule'>
            <div className='module-left'>
            <img src={props.projectImg} alt="project img" />
            </div>
            <div className='module-right'>
               <div className='module-title'>
                    <h2>{props.projectName}</h2>
                    <span className={props.status=="Ready"?"statusOn":"statusOff"}></span>
               </div>
                <p>{props.projectDescription}</p>
                <div className='project-icons'>
                   {
                    props.imagenes.map((item,index)=><img key={index} src={item} alt="logo" />)
                   }
                </div>
                <a href={props.link} className='links' target={'_blank'} rel='noreferrer'>
                <div className='project-btn'>
                   
                    <p>{t("project.btn")}</p>
                    <img src={arrowIcon} alt="logo" />
                </div>
                  </a>
            </div>
        </div>
    )
}

export default ProjectModule