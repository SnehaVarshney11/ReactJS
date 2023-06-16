import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal(
    <div>Portal</div>,
    document.getElementById('portal-root')
  )
}

export default Portal