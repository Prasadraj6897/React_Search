import React from 'react'
import './App.css'
import ButtonLoading from './components/ButtonLoadingSpinner'

/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div id="content" className="active">
        <ButtonLoading />
    </div>
   )

 }

export default App