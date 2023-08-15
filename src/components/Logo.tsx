import React from 'react'
import { Link } from 'react-router-dom'
import Atropos from 'atropos/react'

interface ILogo {
  classes: string
}

export const Logo: React.FC<ILogo> = ({ classes }) => {
  return (
    <Atropos
      shadow={false}
    >
      <Link to='/' className={classes}>
        Burger<span> Time</span>
      </Link>
    </Atropos>
  )
}
