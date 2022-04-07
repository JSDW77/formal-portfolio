import  './styles.css'
import ReactProjects from '../components/projects/React'
import NextProjects from '../components/projects/Next'
import FigmaProjects from '../components/projects/Figma'
import NodeProjects from '../components/projects/Node'
import AllProjects from '../components/projects/AllProjects'
import { useState } from 'react'
import {
    Routes,
    Route,
    Link,
  } from 'react-router-dom'
  import { useNavigate } from "react-router";


const ProjectsPage = () =>{

    const [active,setActive]= useState({
        React:false,
        Next:false,
        Node:false,
        Figma:false,
    })
    const nextAvtive = () => setActive({
        React:false,
        Next:true,
        Node:false,
        Figma:false,
    })
    const nodeAvtive = () => setActive({
        React:false,
        Next:false,
        Node:true,
        Figma:false,
    })
    const reactAvtive = () => setActive({
        React:true,
        Next:false,
        Node:false,
        Figma:false,
    })
    const figmaAvtive = () => setActive({
        React:false,
        Next:false,
        Node:false,
        Figma:true,
    })    

    

    const AsideModule = (props) =>{    
        const nombre = props.nombre
        return(
            <div>
              <div className='titleCont'
                   onClick={()=>props.activador()}
                   >
                  <div className={active[nombre]?'linesActive':'lines'}></div>
                  <div className={active[nombre]?'dotActive':'dot'}></div>
                  <h1>{props.name}</h1>
              </div>
          </div>
        )
    }

    return(  
        <div className='projectCont'>
      <aside>
         <Link to='/Projects/React'><AsideModule name='React Js' activador={reactAvtive} nombre='React'/></Link> 
         <Link to='/Projects/Next'><AsideModule name='Next Js' activador={nextAvtive} nombre='Next'/></Link>
         <div className='midleDot'></div>
         <Link to='/Projects/Node'><AsideModule name='Node Js' activador={nodeAvtive} nombre='Node'/></Link>
          <Link to='/Projects/Figma'><AsideModule name='Figma'  activador={figmaAvtive} nombre='Figma'/></Link>
      </aside>
        <Routes>
         <Route path='/All' element={<AllProjects/>}></Route>
         <Route path='/React' element={<ReactProjects/>}></Route>
         <Route path='/Next' element={<NextProjects/>}></Route>
         <Route path='/Node' element={<NodeProjects/>}></Route>
         <Route path='/Figma' element={<FigmaProjects/>}></Route> 
      </Routes>
        </div> 
    
   )
}

export default ProjectsPage