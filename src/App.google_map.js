import React from 'react'
import Google_Maps from './components/Google_Maps'
import './App.css'
/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div id="content" className="active">
        <Google_Maps />
    </div>
   )

 }

export default App