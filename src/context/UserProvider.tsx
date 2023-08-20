import React, { useState } from 'react'
import { type IProductCart } from '../interface/types'
import { UserContext } from './UserContext'

interface IUserProvider {
  children: React.ReactNode
}

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [cart, setCart] = useState<IProductCart[]>([])

  const cleanCart = (): void => {
    setCart([])
  }

  const addCart = (product: IProductCart): void => {
    const added = cart.find((value) => (value.id === product.id))

    if (added === undefined) {
      setCart(
        [...cart, product]
      )
    } else {
      addQuantity(product.id)
    }
  }

  const deleteProduct = (id: number): void => {
    const newCart = cart.filter((cartItem) => (cartItem.id !== id))
    setCart(newCart)
  }

  const addQuantity = (id: number): void => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(newCart)
  }

  const removeQuantity = (id: number): void => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(newCart)
  }

  return (
    <UserContext.Provider value={{ cart, addCart, deleteProduct, removeQuantity, addQuantity, cleanCart }} >
      {children}
    </UserContext.Provider>
  )
}
