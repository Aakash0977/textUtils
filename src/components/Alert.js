import React from 'react'


const Capitalize= (word)=>{
    const Lower = word.toLowerCase()
    return Lower.charAt(0).toUpperCase() + Lower.slice(1);
}
function Alert(props) {
  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {props.alert.type==='primary'?null:Capitalize(props.alert.type)+':'} <strong>{props.alert.msg}</strong>
  </div>}
    </div>
  )
}

export default Alert
