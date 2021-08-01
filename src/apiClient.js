import request from 'superagent'

export function getItems () {
  return request.get('/items')
    .then(res => res.body)
}