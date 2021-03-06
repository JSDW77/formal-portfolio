import {useTranslation} from 'react-i18next'
import espFlag from '../img/Icons/Others/ESPFLAG.png'
import euFlag from '../img/Icons/Others/EUFLAG.png'
import { NavLink } from 'react-router-dom' 
import homeIcon from '../img/Icons/Others/home.png'
import projectsIcon from '../img/Icons/Others/projects.png'



const NavBar = (props) =>{
    
    const [t,i18n] = useTranslation("global")
    
    return(
        <div className='header'>
            <p className='logo'>JSDW</p>
            <nav className='nav-bar'>
                    <ul>
                        <NavLink to='/' style={({isActive })=> ({color: isActive ? "#113BD2" : "#000000"})}>{t("navbar.home")}</NavLink>
                        <NavLink to='/Projects/All' style={({isActive}) => ({color: isActive ? "#113BD2" : "#000000"})}>{t("navbar.projects")}</NavLink>
                    </ul>
            </nav>
        <div className='flag-cont'>
            <div className='flag-esp' onClick={()=>i18n.changeLanguage("es")}>
                <img src={espFlag} alt="Esp flag" />
            </div>
            <div className='flag-eu' onClick={()=>i18n.changeLanguage("en")}>
                <img src={euFlag} alt="EU flag" />
            </div>
        </div>
        <div className='menu-icon'>
            {
             props.estado?
                <NavLink to='/Projects/All' onClick={()=>props.setEstado(false)}>
                <img src={projectsIcon} alt="projects icon" />
                </NavLink>
             :   
                <NavLink to='/' onClick={()=>props.setEstado(true)}>
                <img src={homeIcon} alt="home icon" />
                </NavLink>
            }
        </div>
        </div> 
   )
}

export default NavBar