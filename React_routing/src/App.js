import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import Home from './component/Home';  
import Contact from './component/Contact';  
import About from './component/About';  
 
   
class App extends Component {  
  render() {  
    return (  
       <Router>  
           <div className="App">  
            <ul className="App-header">  
              <li>  
                <Link to="/">Home</Link>  
              </li>  
              <li>  
                <Link to="/About">About Me</Link>  
              </li>  
              <li>  
                <Link to="/Contact">Contact Me</Link>  
              </li>  
            </ul>  
           <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/About' element={< About />}></Route>  
                 <Route exact path='/Contact' element={< Contact />}></Route>  
          </Routes>  
          </div>  
       </Router>  
   );  
  }  
}  
export default App; 