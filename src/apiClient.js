import request from 'superagent'

// Get all items in list
export function getItems () {
  return request
    .get('https://yegzs62qu6.execute-api.ap-southeast-2.amazonaws.com/prod')
    .then(res => res.body)
}

// Add item to list
export function postItem (item) {
  return request
    .post('')
    .send(item)
    .then(res => console.log(`Successfully added: ${res.body}`))
}

// Delete list item
export function deleteItem (id) {
  return request
  .delete('')
  .send(id)
  .then(res => console.log(`Successfully deleted: ${res.body}`))
}

// Update item complete function
export function patchItem (id) {
  return request
    .patch('')
    .send(id)
    .then(res => console.log(`Successfully updated: ${res.body}`))
}
