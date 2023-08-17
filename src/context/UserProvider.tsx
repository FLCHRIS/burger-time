import React, { useState } from 'react'
import { type ICart, type IProductCart } from '../interface/types'
import { UserContext } from './UserContext'

interface IUserProvider {
  children: React.ReactNode
}

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [cart, setCart] = useState<ICart>({
    total: 0,
    subtotal: 0,
    products: []
  })

  const addCart = (product: IProductCart): void => {
    const added = cart.products.some((value) => (value.id === product.id))

    if (!added) {
      setCart({
        total: cart.total,
        subtotal: cart.subtotal,
        products: [...cart.products, product]
      })
    }
  }

  return (
    <UserContext.Provider value={{ cart, addCart }} >
      {children}
    </UserContext.Provider>
  )
}
