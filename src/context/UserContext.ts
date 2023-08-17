import { createContext } from 'react'
import { type UserContextType } from '../interface/types'

export const UserContext = createContext<UserContextType>(null)
