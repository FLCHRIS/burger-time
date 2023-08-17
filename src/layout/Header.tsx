import React, { useState } from 'react'
import { BiCart } from 'react-icons/bi'
import { Pivot } from 'hamburger-react'
import { Logo } from '../components/Logo'
import { Nav } from '../components/Nav'

export const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <header className='header'>
      <div className='header__container'>
        <div
          className='header__container-effect'
        />
        <Logo classes='header__logo logo' />
        <Nav show={menu} setMenu={setMenu} />
        <div
          className='header__container__buttons'
        >
          <button className='header__container__buttons__shop' aria-label='Show cart'>
            <BiCart aria-hidden='true' />
          </button>
          <div className='header__container__buttons__burger'>
            <Pivot toggle={setMenu} toggled={menu} />
          </div>
        </div>
      </div>
    </header>
  )
}
