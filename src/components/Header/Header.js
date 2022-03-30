import React from 'react'
import Switch from '../Switch/Switch'
import './Header.scss'

function Header( {toggleTheme, light} ) {
  return (
    <header>
        <div className='logo' style={{color: light ? '#687ab9' : '#ffd700'}}>CurrencyApp</div>
        <Switch toggleTheme={toggleTheme} light={light} />
    </header>
  )
}

export default Header