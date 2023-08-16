import React from 'react'
import { type IProduct } from '../interface/types'
import { BiCartAdd } from 'react-icons/bi'
import Atropos from 'atropos/react'

export const Card: React.FC<IProduct> = ({ id, image, name, price, information }) => {
  return (
    <div className='card'>
      <Atropos
        shadow={false}
      >
        <img src={image} alt={name} role='presentation' className='card__img' />
      </Atropos>
      <h3 className='card__name'>{name}</h3>
      <p className='card__info'>{information}</p>
      <div className='card__container'>
        <span className='card__container__price'>$ {price}</span>
        <button aria-label='Add to cart' className='card__container__button'>
          <BiCartAdd aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
