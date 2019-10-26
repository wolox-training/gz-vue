import { api, defaultHeaders } from '../config/api'
import LocalStorageService from './localStorage'

export const signIn = session => api.post('users/sessions', { session })

export const signUp = user => api.post('users', { user })

export const setSessionData = data => {
  const sessionData = {
    'Authorization': data.access_token
  }
  LocalStorageService.setSessionData(sessionData)
  api.setHeader('Authorization', data.access_token)
}

export const removeSession = () => {
  LocalStorageService.removeSessionData()
  api.setHeaders(defaultHeaders)
}
