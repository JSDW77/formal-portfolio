import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


const Home = (props) =>{
    
    return(
        <>
       <Hero/>
       <Skills/>
       <Projects estado={props.estado} setEstado={props.setEstado}/>
        </> 
   )
}

export default Home