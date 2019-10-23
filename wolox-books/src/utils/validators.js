import { helpers } from 'vuelidate/lib/validators'

export const passwordValidation = helpers.regex('password', /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/)
