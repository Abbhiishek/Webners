const tasklist = document.getElementById('tasklist')
const taskname = document.getElementById('taskname')
const addtask = document.getElementById('addtask')
const cleartask = document.getElementById('cleartask')

function addtotasks(){
  const li = document.createElement('li')
  const task = document.createTextNode(taskname.value)
  li.appendChild(task)
  tasklist.appendChild(li)
}
function cleartasks(){
   tasklist.innerHTML=''
}
addtask.addEventListener('click',addtotasks)
cleartask.addEventListener('click',cleartasks)

var list = document.querySelector('ul')
list.addEventListener('click',function(ev){
  if(ev.target.tagName==='LI'){
    ev.target.classList.toggle('checked');
  }
},false)

