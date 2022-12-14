import Api from '../../services/Api'
import { IContext, IUser } from './types'

const setUserLocalStorage = (user: IUser | null) => {
  localStorage.setItem('t', JSON.stringify(user))
}

const getUserLocalStorage = () => {
  const json = localStorage.getItem('t')

  if (json) {
    const user = JSON.parse(json)
    return user ?? null
  }

  return null
}

const RegisterRequest: IContext['register'] = async (
  name,
  email,
  password,
  phone
) => {
  const req = await Api.post('/user/register', {
    name,
    email,
    password,
    phone
  })
  return req.data
}

const LoginRequest: IContext['authenticate'] = async (email, password) => {
  try {
    const req = await Api.post('user/login', { email, password })
    return req.data
  } catch (error) {
    return error
  }
}

const UpdateRequest: IContext['update'] = async (id, name, email) => {
  try {
    const req = await Api.patch('user/update', { id, name, email })
    return req.data
  } catch (error) {
    return error
  }
}

const getUserData = async (token: IUser) => {
  try {
    const req = await Api.get(`user/login/${token}`)

    return { ...req.data }
  } catch (error) {
    return error
  }
}

export {
  RegisterRequest,
  LoginRequest,
  UpdateRequest,
  setUserLocalStorage,
  getUserLocalStorage,
  getUserData
}
