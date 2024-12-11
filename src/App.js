
import './App.css';
import Editor from './Pages/Editor';
// import LandingPage from './Pages/LandingPage';
import {Routes,Route} from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import Signup from './Pages/Signup';
import Login from './Pages/Login';


function App() {
  return (
   <div>
    
  <Routes>
  <Route path="/" element={<LandingPage />} />
<Route path="/CREATE ROADMAPS" element={<Editor/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/Login" element={<Login/>}/>


  </Routes>

  
  </div>
  );
}

export default App;
