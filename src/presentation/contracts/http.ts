export interface HttpRequest<T = any> {
  headers: T
  body?: T
  params?: T
  query?: T
}

export interface HttpResponse {
  code: number
  data: unknown
}

export const ok = (data?: any) => ({code: 200, data})
export const created = (data?: any) => ({code: 201, data})
export const badRequest = (data?: any) => ({code: 400, data})
export const notFound = (data?: any) => ({code: 404, data})
export const serverError = (data?: any) => ({code: 500, data})
