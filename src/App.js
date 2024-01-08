import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstComponent from './firstcomponent/firstcomponent.component';
import Landingpage from './landingpage/landingpage.component';
import Login from './login/Login.component';
import Createaccount from './Createaccount/Createaccount';
import BlueNavBar from './blueNavbar/bluenavbar.component';
import Madcapuniversity from './madcapuniversity/madcapuniversity';



function App() {
  return (
    
    <div className="App">

      <Router>
      
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/Bluenavbar" element={<BlueNavBar />} />
          <Route path="/Whypuppyculture?" element={<FirstComponent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Createaccount" element={< Createaccount/>} />
          <Route path="/Madcapuniversity" element={< Madcapuniversity/>} />
        </Routes>
      </Router>
    </div>
   


  );
}

export default App;
