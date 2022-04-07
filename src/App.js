import './Global.css';
import NavBar from './components/Navbar';
import Home from './pages/home';
import ProjectsPage from './pages/projects';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  return (
  
     <div className='App-margined-cont'>
    <Router>
          <NavBar/>
      <Routes> 
         <Route path='/' element={<Home/>}/>   
         <Route path='/Projects/*' element={<ProjectsPage/>}/>   
      </Routes>
     </Router>
     </div>
    
    
  );
}

export default App;
