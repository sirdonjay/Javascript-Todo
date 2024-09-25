// VALIDATING THE INPUT FILED 

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("please enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML
         +=  `
 
            <div class="task">
                <span  id = "taskname">
                    ${document.querySelector('#newtask input').value } 
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
    }
    // DELETING A  TASK
    var current_tasks = document.querySelectorAll('.delete');
    for ( var i=0;i<current_tasks.length; i++ ){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    // CORSSING COMPLETED TASK
    var tasks = document.querySelectorAll('.task');
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed');
        }
    }

    // CLEARING UP THE INPUT FILED AFTHE ENTRY 
    document.querySelector('#newtask input').value ="";
}

