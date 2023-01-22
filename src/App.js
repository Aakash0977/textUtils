import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const toggleMode =()=>{
  if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#121212'
    showAlert('Enabled DarkMode', 'success')
    document.title = 'TextUtils - DarkMode'

  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('Enabled lightMode', 'success')
    document.title = 'TextUtils - LightMode'
  }
}

const showAlert = (message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

  return (
     <Router> 
  <Navbar title="TextUtils" about="Its me about" mode={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <Routes>
          <Route exact path='/about' element={<About mode={mode}/>} />
          <Route exact path='/' element={<TextForm mode={mode}  showAlert={showAlert}/>} />          
  </Routes>
  </div>
    </Router>
 );
}

export default App;
