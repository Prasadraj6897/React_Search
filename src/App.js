import React from 'react'

import './App.css'
import BatteryStatus from './components/BatteryStatus'


/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div id="content" className="active">
        < BatteryStatus />
    </div>
   )

 }

export default App