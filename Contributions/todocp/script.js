const tasklist = document.getElementById('tasklist')
const savedtasks = document.getElementById('localtasks')
const taskname = document.getElementById('taskname')
const addtask = document.getElementById('addtask')
const cleartask = document.getElementById('cleartask')
const savebtn = document.getElementById('save')
const delbtn = document.getElementById('del')
var tc = 1



//Function to add task in the list
function addtotasks(){
  const msg = document.getElementById('msg')
  const li = document.createElement('li')
  const task = document.createTextNode(taskname.value)
  msg.style.display = "block";
  
  li.appendChild(task)
  tasklist.appendChild(li)
  // savedtasks.appendChild(li)

  localStorage.setItem(tc,li.innerText)
  var taskvals = localStorage.getItem(tc)

  const li2 = document.createElement('li')
  const taskn = document.createTextNode(taskvals)
  li2.appendChild(taskn)
  savedtasks.appendChild(li2)

  tc++

  
}
//Clear the tasklist
function cleartasks(){
  tasklist.innerHTML=''
}
//Delete all the tasks from storage
function delall(){
  savedtasks.innerHTML=''
  localStorage.clear();
  tc = 1
}

//Callers
addtask.addEventListener('click',addtotasks)
cleartask.addEventListener('click',cleartasks)
delbtn.addEventListener('click',delall)

tasklist.addEventListener('click',function(ev){
  if(ev.target.tagName==='LI'){
    ev.target.classList.if('checked');
    // var tasknametext = ev.target.innerText

    // localStorage.setItem('task',tasknametext)
    // i++;

    // localStorage.getItem('task')
    // var taskcount = document.getElementsByTagName('LI').length;

    // console.log(taskcount)  
    // localStorage.setItem('task'+i,tasknametext)
    // i++
 
    // else if(ev.target.className!='checked'){
    //   localStorage.removeItem('task'+1,ev.target.innerText)
    //   i++
    // }

 }
},false)



