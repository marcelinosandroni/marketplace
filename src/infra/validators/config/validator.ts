import Ajv from 'ajv'
import addFormats from 'ajv-formats'

export const validator = new Ajv({allErrors: true})
addFormats(validator)
