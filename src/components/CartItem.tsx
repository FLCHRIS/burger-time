import React, { useContext } from 'react'
import { type IProductCart, type IUserContext } from '../interface/types'
import { BiTrash } from 'react-icons/bi'
import toast from 'react-hot-toast'
import Atropos from 'atropos/react'
import arrowRight from '../assets/icons/arrowright.svg'
import arrowLeft from '../assets/icons/arrowleft.svg'
import { UserContext } from '../context/UserContext'

export const CartItem: React.FC<IProductCart> = ({ id, image, information, name, price, quantity }) => {
  const { deleteProduct, removeQuantity, addQuantity } = useContext(UserContext) as IUserContext

  const handleTrash = (): void => {
    deleteProduct(id)
    toast.success('Removed product', {
      className: 'toast'
    })
  }
  const handleRemoveQuantity = (): void => {
    if (quantity > 1) {
      removeQuantity(id)
    } else {
      deleteProduct(id)
    }
  }
  const handleAddQuantity = (): void => {
    addQuantity(id)
  }
  return (
    <li className='item'>
      <button aria-label='Delete item' className='item__trash' onClick={handleTrash}>
        <BiTrash aria-hidden='true' />
      </button>
      <Atropos
        shadow={false}
      >
        <img src={image} alt={name} className='item__img' />
      </Atropos>
      <div className='item__data'>
        <h3 className='item__data__name'>
          {name}
        </h3>
        <span className='item__data__description'>
          {information}
        </span>
        <div className='item__data__grid'>
          <div className='item__data__grid__quantity'>
            <button aria-label='Remove one' onClick={handleRemoveQuantity}>
              <img src={arrowLeft} alt="" aria-hidden='true' />
            </button>
            <span>
              {quantity}
            </span>
            <button aria-label='Add one'>
              <img src={arrowRight} alt="" aria-hidden='true' onClick={handleAddQuantity} />
            </button>
          </div>
          <span className='item__data__grid__price'>
            $ {price}
          </span>
        </div>
      </div>
    </li>
  )
}
