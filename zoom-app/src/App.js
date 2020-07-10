import React from 'react';
import './App.css';
import ConnectMeeting from './components/ConnectMeeting'
import {
  Route, 
  BrowserRouter,
} from 'react-router-dom';
import ZoomJoin from './components/ConnectMeeting/ZoomJoin'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route path='/' exact component={ConnectMeeting}/>
     <Route path='/zoom' exact component={ZoomJoin} />
     </BrowserRouter>    
    </div>
  );
}

export default App;
