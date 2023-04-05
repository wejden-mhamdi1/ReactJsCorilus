import logo from './logo.svg';
import './App.css';
import ListComponent from './Components/ListComponent';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ShowFile from './Components/ShowFile';
import HomeComponent from './Components/HomeComponent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ShowSplitedFile from './Components/ShowSplitedFile';
import FileSplited from './Components/FileSplited';


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
                        <Route path='/list/Splited' element={< ShowSplitedFile/>} />
                        <Route path='/list/Split/:id' element={< FileSplited/>} />
                    </Routes>
               </div>
               <Footer></Footer>
               
           
        </Router>
      </div>
  );
}

export default App;
