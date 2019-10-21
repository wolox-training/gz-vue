import { create } from 'apisauce'

// eslint-disable-next-line no-unused-vars
const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  headers: { Accept: 'application/json' }
})

export const signIn = (email, password) => {
  const response = api.post('users/sessions', { 'session': { 'email': email, 'password': password } })
  return response.data
}
