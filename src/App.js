import React from 'react'

import useThemeSwitcher from './hooks/useThemeSwitcher'
import Rating from './components/Rating'
import './App.css'
/**`
* @author
* @function App
**/

const App = (props) => {
  const ThemeSwitcher = useThemeSwitcher();
  return(
    <div id="content" className="active">
      <p className="mb-0 text-red">{ThemeSwitcher} </p>
      < Rating />
    </div>
   )

 }

export default App