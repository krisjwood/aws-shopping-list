import request from 'superagent'

const InvokeApi = 'https://yegzs62qu6.execute-api.ap-southeast-2.amazonaws.com/prod'

// Get all items in list
export async function getItems () {
  const res = await request
    .get(InvokeApi)
  return res.body
}

// Add item to list
export async function postItem (item) {
  await request
    .post(InvokeApi)
    .send({item})
  }

// Delete list item
export async function deleteItem (id) {
  const res = await request
    .delete(InvokeApi)
    .send(id)
  return console.log(`Successfully deleted ${res.body} item`)
}

// Update item complete function
export async function patchItem (item) {
  await request
    .patch(InvokeApi)
    .send(item)
  return console.log('Successfully updated')
}
