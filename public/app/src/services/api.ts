import axios from 'axios'

const getData = () => new Promise((r) => setTimeout(() => r('terminei!'), 3000))

const wrapPromise = (promise: Promise<any>) => {
  let status = 'pending'
  let result: any
  const suspender = promise
    .then((r) => {
      console.log('deu certo')
      status = 'success'
      result = r
    })
    .catch((e) => {
      console.log('deu ruim')
      status = 'error'
      result = e
    })

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      }
      return result
    },
  }
}

export const createResource = () => ({data: wrapPromise(getData())})
