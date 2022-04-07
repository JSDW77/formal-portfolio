import './Global.css';
import NavBar from './components/Navbar';
import Home from './pages/home';
import ProjectsPage from './pages/projects';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { useState } from 'react'


function App() {

  const [home,setHome]=useState(true)
  const setProjectsMode= ()=> {
    home?
    setHome(false):
    setHome(true)
  }
  return (
  
     <div className='App-margined-cont'>
    <Router>
          <NavBar estado={home} setEstado={setProjectsMode}/>
      <Routes> 
         <Route path='/' element={<Home estado={home} setEstado={setProjectsMode}/>}/>   
         <Route path='/Projects/*' element={<ProjectsPage/>}/>   
      </Routes>
     </Router>
     </div>
    
    
  );
}

export default App;
