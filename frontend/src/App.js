import './App.css';
import { Route,Routes,Link } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Smartphones from './pages/Products/Smartphones/Smartphones';
import Laptops from './pages/Products/Laptops/Laptops';
import Drones from './pages/Products/Drones/Drones';
import About from './pages/About/About';

//Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/laptops' element={<Laptops/>} />
        <Route path='/smartphones' element={<Smartphones/>}/>
        <Route path='/drones' element={<Drones/>} />
        <Route path='/about' element={<About/>} />
     </Routes>
    </div>
  );
}

export default App;
