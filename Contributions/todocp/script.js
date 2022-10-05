const tasklist = document.getElementById('tasklist')
const taskname = document.getElementById('taskname')
const addtask = document.getElementById('addtask')
const cleartask = document.getElementById('cleartask')


function addtotasks(){
  const msg = document.getElementById('msg')
  const li = document.createElement('li')
  const task = document.createTextNode(taskname.value)
  
  li.appendChild(task)
  msg.style.display = "block";
  tasklist.appendChild(li)
}
function cleartasks(){
  tasklist.innerHTML=''
}
addtask.addEventListener('click',addtotasks)
cleartask.addEventListener('click',cleartasks)
var list = document.querySelector('ul')

var i = 1 
list.addEventListener('click',function(ev){
  if(ev.target.tagName==='LI'){
    ev.target.classList.toggle('checked');
    // var tasknametext = ev.target.innerText
    // var taskcount = document.getElementsByTagName('LI').length;

    // console.log(taskcount)  

    if(ev.target.className=='checked'){
      if(ev.target.innerText != localStorage.key(i).valueOf){
        console.log('already exists!')
        i++
      }
      // localStorage.setItem('task'+i,ev.target.innerText)
      // i++
    }
    // else if(ev.target.className!='checked'){
    //   localStorage.removeItem('task'+1,ev.target.innerText)
    //   i++
    // }

 }

},false)



