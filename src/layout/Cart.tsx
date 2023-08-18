import React, { useContext } from 'react'
import { CartItem } from '../components/CartItem'
import { UserContext } from '../context/UserContext'
import { Toaster } from 'react-hot-toast'
import { type IUserContext } from '../interface/types'

export const Cart: React.FC = () => {
  const { cart } = useContext(UserContext) as IUserContext

  return (
    <section className='cart'>
      <h2 className='subtitle'>
        My Cart
      </h2>
      <div className='cart__grid'>
        <ul className='cart__grid__items'>
          {
            cart.map((product) => (
              <CartItem key={product.id} id={product.id} image={product.image} information={product.information} name={product.name} price={product.price} quantity={product.quantity} />
            ))
          }
        </ul>
        <div className='cart__grid__info'>
          <h3 className='cart__grid__info__title'>
            Summary
          </h3>
          <div className='cart__grid__info__container'>
            <div className='cart__grid__info__container__div'>
              <span className='cart__grid__info__container__div-name'>
                Shipping Cost:
              </span>
              <span className='cart__grid__info__container__div-price'>
                $ 30
              </span>
            </div>
            <div className='cart__grid__info__container__div'>
              <span className='cart__grid__info__container__div-name'>
                Subtutal:
              </span>
              <span className='cart__grid__info__container__div-price'>
                $ 40
              </span>
            </div>
          </div>
          <div className='cart__grid__info__div'>
            <span className='cart__grid__info__div-name'>
              Total:
            </span>
            <span className='cart__grid__info__div-price'>
              $ 70
            </span>
          </div>
          <button className='cart__grid__info__button'>Checkout</button>
        </div>
      </div>
      <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </section>
  )
}
