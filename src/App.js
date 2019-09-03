import React from 'react';
import './App.css';
import {HashRouter ,Route} from 'react-router-dom';
import Header from './components/Header/Header';
import MasterRegister from './components/Registration/MasterRegister';
import Register from './components/Registration/Register';
import Register2 from './components/Registration/Register2';
import Register3 from './components/Registration/Register3';
import Login from './components/Login/Login';
import AccountDetails from './components/AccountDetails/AccountDetails';


function App() {
  return (
    <div className="App">
   <HashRouter>
     <Header/>
     <Route path='/' component={MasterRegister} exact/>
     <Route path='/masterRegister' component={MasterRegister}/>
     <Route path='/register' component={Register} />
     <Route path="/register2" component={Register2}/>
     <Route path="/register3" component={Register3}/>
     <Route path="/accountDetails" component={AccountDetails}/>
     <Route path="/login" component={Login}/>
   </HashRouter>

    </div>
  );
}


export default App;
