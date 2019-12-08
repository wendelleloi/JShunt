import React from 'react';
import Routes from './routers'

import './style.css'

import Header from './components/Header'

const App = () => {
  return(
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  )
}

export default App;
