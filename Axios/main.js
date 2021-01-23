
// GET REQUEST
function getTodos() {
  axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
      timeout: 5000
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// POST REQUEST
function addTodo() {
  axios
    .post('https://jsonplaceholder.typicode.com/todos', {
      title: 'New Data',
      completed: false
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// PUT REQUEST
function updateTodo() {
  axios
    .put('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Updated Data',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}
// PATCH REQUEST
function PatchTodo() {
  axios
    .patch('https://jsonplaceholder.typicode.com/todos/1', {
      title: 'Patch Data',
      completed: true
    })
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}
// DELETE REQUEST
function removeTodo() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

`;
}

document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('update').addEventListener('click', PatchTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
