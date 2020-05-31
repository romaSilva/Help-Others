import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Splash from './components/Splash'
import Results from './components/Results'
import GlobalState from './contexts/GlobalState'
import './App.css'



function App() {

  return (
    <Router>
      <GlobalState>
        <div className="app">
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/results" component={Results}/>
            </Switch>
          </div>
        </div>
      </GlobalState>
    </Router>
      
    
  );
}

export default App
