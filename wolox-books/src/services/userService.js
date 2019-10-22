import { api } from '../config/api'
import LocalStorageService from './localStorage'

export const signIn = session => api.post('users/sessions', { session })

export const signUp = user => api.post('users', { user })

export const setSessionData = data => {
  const sessionData = {
    'Authorization': data.access_token
  }
  LocalStorageService.setSessionData(sessionData)
}

export const removeSession = () => {
  LocalStorageService.removeSessionData()
}
