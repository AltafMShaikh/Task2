// GET REQUEST
function getTodos() {
  console.log('GET Request');
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log('PUT/PATCH Request');
}
//PATCH REQUEST
function PatchTodo() {
  console.log('PATCH Request');
}

// DELETE REQUEST
function removeTodo() {
  console.log('DELETE Request');
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
