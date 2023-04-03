import logo from './logo.svg';
import './App.css';
import ListComponent from './Components/ListComponent';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ShowFile from './Components/ShowFile';
import HomeComponent from './Components/HomeComponent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
 
    <div>
        <Router>
           
           
                <NavBar></NavBar>
                <div className="container">
                    <Routes>
                        <Route path='/'  element={<HomeComponent />} />
                       
                        <Route path='/list' element={< ListComponent/>} />
                        <Route path='/list/show' element={< ShowFile/>} />
                    </Routes>
               </div>
               <Footer></Footer>
               
           
        </Router>
      </div>
  );
}

export default App;
