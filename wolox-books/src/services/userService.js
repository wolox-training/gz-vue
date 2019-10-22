import { api } from '../config/api'

export const signIn = session => api.post('users/sessions', { session })

export const signUp = user => api.post('users', { user })
