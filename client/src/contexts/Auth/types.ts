import { Dispatch, SetStateAction } from 'react'

interface IUser {
  token?: string
}

interface IContext extends IUser {
  user: Object
  register: (
    name: string,
    email: string,
    password: string,
    phone: string
  ) => Promise<void>
  authenticate: (email: string, password: string) => Promise<void>
  update: (
    id: number,
    name: string,
    email: string,
    phone: string
  ) => Promise<void>
  logout: () => void
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

interface IAuthProvider {
  children: JSX.Element
}

export type { IUser, IContext, IAuthProvider }
