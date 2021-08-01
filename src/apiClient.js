import request from 'superagent'


const ApiInvoke = "https://yegzs62qu6.execute-api.ap-southeast-2.amazonaws.com/prod"

export function getItems () {
  return request
    .get(ApiInvoke)
    .then(res => res.body)
}