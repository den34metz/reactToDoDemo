import React from 'react'
import '../styles/styles.scss'

function Backdrop(props) {
  return (
    <div className="backdrop" onClick={props.onClick}/>
  )
}

export default Backdrop