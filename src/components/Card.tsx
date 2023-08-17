import React, { useContext } from 'react'
import { type IProduct, type IProductCart } from '../interface/types'
import { BiCartAdd } from 'react-icons/bi'
import Atropos from 'atropos/react'
import { UserContext } from '../context/UserContext'

export const Card: React.FC<IProduct> = ({ id, image, name, price, information }) => {
  const cart = useContext(UserContext)

  const handleAddProduct = (): void => {
    const newProduct: IProductCart = {
      id,
      image,
      name,
      price,
      information,
      quantity: 1
    }
    cart?.addCart(newProduct)
  }

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
        <span className='card__container__price' onClick={() => { console.log(cart?.cart) }}>$ {price}</span>
        <button aria-label='Add to cart' className='card__container__button' onClick={handleAddProduct}>
          <BiCartAdd aria-hidden='true' />
        </button>
      </div>
    </div>
  )
}
