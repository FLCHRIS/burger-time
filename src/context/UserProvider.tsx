import React, { useState } from 'react'
import { type IProductCart } from '../interface/types'
import { UserContext } from './UserContext'

interface IUserProvider {
  children: React.ReactNode
}

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [cart, setCart] = useState<IProductCart[]>([])

  const addCart = (product: IProductCart): void => {
    const added = cart.find((value) => (value.id === product.id))

    if (added === undefined) {
      console.log('No existe y lo agrego')
      setCart(
        [...cart, product]
      )
    } else {
      const newCart = cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      setCart(newCart)
    }
  }

  const deleteProduct = (id: number): void => {
    const newCart = cart.filter((cartItem) => (cartItem.id !== id))
    setCart(newCart)
  }

  return (
    <UserContext.Provider value={{ cart, addCart, deleteProduct }} >
      {children}
    </UserContext.Provider>
  )
}
