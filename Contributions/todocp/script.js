//Get all the elements
const tasklist = document.getElementById('tasklist')
const savedtasks = document.getElementById('localtasks')
const taskname = document.getElementById('taskname')
const addtask = document.getElementById('addtask')
const cleartask = document.getElementById('cleartask')
const delbtn = document.getElementById('del')
const backbtn = document.getElementById('back')
var tc = 1


//Function to Fetch local storage data
function load(){
  // console.log(localStorage.length)
  while(tc != localStorage.length){
    var taskvals = localStorage.getItem(tc)
    const li2 = document.createElement('li')
    const taskn = document.createTextNode(taskvals)
    li2.appendChild(taskn)
    savedtasks.appendChild(li2)
    tc++
  }
}

//Function to add task in the list
function addtotasks(e){
  if(e.key === "Enter"){
      const msg = document.getElementById('msg')
      const li = document.createElement('li')
      const task = document.createTextNode(taskname.value)
      msg.style.display = "block";
      
      li.appendChild(task)
      tasklist.appendChild(li)

      localStorage.setItem(tc,li.innerText)
      tc++
  }

}
function addtotask(){
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
  msg.style.display='none'
}
//Delete all the tasks from storage
function delall(){
  savedtasks.innerHTML=''
  localStorage.clear();
  tc = 1
}
//Take a backup
// function backup(){
//   var data = {
//     task : "Go to the gym"
//   }
//   var datastring = JSON.stringify(data)
//   var fs = require('fs')
//   fs.writeFile("tasks.json",datastring,function(err, result){
//     if(err) console.log('error',err);
//   })
// }

//Callers
addtask.addEventListener('click',addtotask)
cleartask.addEventListener('click',cleartasks)
delbtn.addEventListener('click',delall)
backbtn.addEventListener('click',load)
taskname.addEventListener('keypress',addtotasks)


tasklist.addEventListener('click',function(ev){
  if(ev.target.tagName==='LI'){
    ev.target.classList.toggle('checked');

 }
},false)



