import React, { useContext, useState, useEffect } from 'react'
import { CartItem } from '../components/CartItem'
import { UserContext } from '../context/UserContext'
import { Toaster } from 'react-hot-toast'
import { type IUserContext } from '../interface/types'
import emptyCart from '../assets/images/empty_cart.svg'
import { Link } from 'react-router-dom'

interface ICartInfo {
  total: number
  subtotal: number
  shippingCost: number
}

export const Cart: React.FC = () => {
  const [cartInfo, setCartInfo] = useState<ICartInfo>({ total: 0, subtotal: 0, shippingCost: 0 })
  const { cart, cleanCart } = useContext(UserContext) as IUserContext

  let shippingCost = 30

  useEffect(() => {
    if (cart.length > 0) {
      let subtotal = 0
      cart.forEach((itemCart) => {
        const value = itemCart.quantity * itemCart.price
        subtotal = subtotal + value
      })

      if (subtotal > 100 && subtotal < 200) {
        shippingCost = 60
      } else if (subtotal > 200) {
        shippingCost = 90
      }

      setCartInfo({
        shippingCost,
        subtotal,
        total: subtotal + shippingCost
      })
    } else {
      setCartInfo({
        total: 0,
        subtotal: 0,
        shippingCost: 0
      })
    }
  }, [cart])

  return (
    <section className='cart'>
      <h2 className='subtitle'>
        My Cart
      </h2>
      <div className='cart__grid'>
        <ul className='cart__grid__items'>
          {
            cart.length > 0
              ? (
                  cart.map((product) => (
                    <CartItem key={product.id} id={product.id} image={product.image} information={product.information} name={product.name} price={product.price} quantity={product.quantity} />
                  ))
                )
              : (
                  <li className='cart__grid__items__empty'>
                    <img src={emptyCart} alt="empty Cart" className='cart__grid__items__empty-img' />
                    <h3 className='cart__grid__items__empty-title'>Empty Cart</h3>
                    <Link to={'/menu'} className='cart__grid__items__empty-link'>Explore menu</Link>
                  </li>
                )
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
                $ {cartInfo.shippingCost}
              </span>
            </div>
            <div className='cart__grid__info__container__div'>
              <span className='cart__grid__info__container__div-name'>
                Subtotal:
              </span>
              <span className='cart__grid__info__container__div-price'>
                $ {cartInfo.subtotal}
              </span>
            </div>
          </div>
          <div className='cart__grid__info__div'>
            <span className='cart__grid__info__div-name'>
              Total:
            </span>
            <span className='cart__grid__info__div-price'>
              $ {cartInfo.total}
            </span>
          </div>
          <button className='cart__grid__info__button' onClick={() => { cleanCart() } }>Checkout</button>
        </div>
      </div>
      <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </section>
  )
}
