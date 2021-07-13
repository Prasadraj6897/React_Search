import React from 'react'

import './App.css'
import FileUploadProgressBar from './components/FileUploadProgressBar'

/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div id="content" className="active">
        <FileUploadProgressBar />
    </div>
   )

 }

export default App