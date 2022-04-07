import {useTranslation} from 'react-i18next'
import espFlag from '../img/Icons/Others/ESPFLAG.png'
import euFlag from '../img/Icons/Others/EUFLAG.png'
import { NavLink } from 'react-router-dom' 
import homeIcon from '../img/Icons/Others/home.png'
import projectsIcon from '../img/Icons/Others/projects.png'
import { useState } from 'react'


const NavBar = () =>{
    
    const [t,i18n] = useTranslation("global")
    const [home,setHome]=useState(true)
    return(
        <div className='header'>
            <p className='logo'>JSDW</p>
            <nav className='nav-bar'>
                    <ul>
                        <NavLink to='/' >{t("navbar.home")}</NavLink>
                        <NavLink to='/Projects/All'>{t("navbar.projects")}</NavLink>
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
             home?
                <NavLink to='/Projects/All' onClick={()=>setHome(false)}>
                <img src={projectsIcon} alt="projects icon" />
                </NavLink>
             :   
                <NavLink to='/' onClick={()=>setHome(true)}>
                <img src={homeIcon} alt="home icon" />
                </NavLink>
            }
        </div>
        </div> 
   )
}

export default NavBar