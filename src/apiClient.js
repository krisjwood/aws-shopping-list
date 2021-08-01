import request from 'superagent'

const InvokeApi = 'https://yegzs62qu6.execute-api.ap-southeast-2.amazonaws.com/prod'

// Get all items in list
export function getItems () {
  return request
    .get(InvokeApi)
    .then(res => res.body)
}

// Add item to list
export function postItem (item) {
  return request
    .post(InvokeApi)
    .send(item)
    .then(() => console.log('Successfully added'))
  }

// Delete list item
export function deleteItem (id) {
  return request
    .delete(InvokeApi)
    .send(id)
    .then(res => console.log(`Successfully deleted ${res.body} item`))
}

// Update item complete function
export function patchItem (item) {
  return request
    .patch(InvokeApi)
    .send(item)
    .then(() => console.log('Successfully updated'))
}
