import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BiCart } from 'react-icons/bi'
import { Pivot } from 'hamburger-react'
import { Logo } from '../components/Logo'
import { Nav } from '../components/Nav'

export const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <header className='header'>
      <div className='header__top'>
        <motion.div
          initial={{
            translateX: -90
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            duration: 1
          }}
          className='header__top-effect'
        />
        <Logo classes='header__logo logo' />
        <Nav show={menu} />
        <motion.div
          initial={{
            translateY: -60
          }}
          animate={{
            translateY: 0
          }}
          transition={{
            duration: 1,
            delay: 0.3
          }}
          className='header__top__container'
        >
          <button className='header__top__container__shop'>
            <BiCart aria-hidden='true' />
          </button>
          <div className='header__top__container__burger'>
            <Pivot toggle={setMenu} toggled={menu} />
          </div>
        </motion.div>
      </div>
    </header>
  )
}
