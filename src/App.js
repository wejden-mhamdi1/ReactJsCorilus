import logo from './logo.svg';
import './App.css';
import ListComponent from './Components/ListComponent';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import HomeComponent from './Components/HomeComponent'
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  
    <div className='main'>
    <NavBar/>
    <main></main>
    <HomeComponent/>
    <Footer/>
    </div>
     );
    
    <BrowserRouter>
     <Routes>
   
   <Route path="/list" element={<ListComponent/>} exact />
   </Routes>
    </BrowserRouter>
 
}

export default App;
