document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task.value)
    form.reset()
    
  })

});

 //create dropdown menu of priority list(low, medium, high)
 function createDropDown () {
   let select  = document.createElement('select')
   let option = document.createElement('option')
   let optionOne = document.createElement('option')
   let optionTwo = document.createElement('option')
   option.textContent = 'Low Priority'
   optionOne.textContent = 'Medium Priority'
   optionTwo.textContent = 'High Priority'
   select.appendChild(option)
   select.appendChild(optionOne)
   select.appendChild(optionTwo)
   //Added to the DOM
   document.querySelector('#create-task-form').appendChild(select)
   select.setAttribute('id', 'Dropdown')
   
 }


  function buildToDo(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = " X"
    p.textContent = `${todo}`
    p.appendChild(btn)
  
    document.querySelector('#tasks').appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

  createDropDown()