// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const toggleMode =()=>{
  if (mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#121212'
    showAlert('Enabled DarkMode', 'success')

  }
  else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('Enabled lightMode', 'success')
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
    <>
  <Navbar title="TextUtils" about="Its me about" mode={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
  <TextForm mode={mode}  showAlert={showAlert}/>
  {/* <About/> */}
  </div>
  
    </>
  );
}

export default App;
