import React from 'react'

function Header() {
  return (
    <>
    <header>
      <div className="header">
      <div className='logo_container'>
        <img src="logo-removebg-preview.png" alt="logo" className='logo_img'/>
        <h1 className='heading'>Ramaera industries</h1>
      </div>
      <div className='notification_container'>
        <img src="Notify.svg" alt="notify" />
        <p>English (UK) </p>
        <img src='Polygon 1.svg' alt='downarrow'></img>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header
