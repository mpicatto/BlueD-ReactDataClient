//---------------------libraries---------------------
import React from 'react'
import {Route} from 'react-router-dom';

//---------------------Components------------------------
import Home from './components/Home/index'
import NavBar from './components/NavBar/index';
import Footer from './components/Footer/index';
import Loader from './components/Loader/index';
const App = (props) => {

  return (
    <div>
      <Route path='/' component={NavBar}/>
      <Route exact path='/' component={Loader} />
      <Route exact path='/home' component={Home} />
      <Route path='/' component={Footer}/>
    </div>
  )
}

export default App;
