import React from 'react';
import './App.css';
import গতকালR from './components/Header/গতকাল';
import Shoppp from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Rreview from './components/Revieww/Rreview';
import Managee from './components/MiNven/Managee';
import NotMatch from './components/NotMatch/NotMatch';



function App() {
  return (
    <div>
      <গতকালR>
      </গতকালR> 
      <Router>
        <switch>
          <Route path="/butik">
          <Shoppp></Shoppp> 
          </Route>
          <Route path="/reviewDekho">
            <Rreview></Rreview>
          </Route>
          <Route path="/manageIInver">
            <Managee></Managee>
          </Route>
          <Route  exact path="/">
          <Shoppp></Shoppp> 
          </Route>

         <Route path="*">
            <NotMatch></NotMatch>
            </Route>

        </switch>
      </Router>
      
       
    </div>
  );
}

export default App;
