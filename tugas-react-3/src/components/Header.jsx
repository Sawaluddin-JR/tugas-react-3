//import React from 'react'

import './Header.css'

const Header = () => {
  const nama = 'Sawaluddin Siregar';
  return (
    <nav className='nav'>
      <header className="headers">
        {nama}
      </header>
    </nav>
  )
}

export default Header