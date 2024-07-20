function addtask() {
    task = document.getElementById("taskval").value;
    box = document.getElementById("tasks");
    console.log(task);
    obj = document.createElement('div')
    obj.className = 'task';
    intask = document.createElement('p')
    intask.innerHTML = task;
    button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn';
    button.innerHTML = 'Delete';
    button.addEventListener('click',() => { document.getElementById("tasks").remove(obj) }
    );
    obj.append(intask, button);
    document.getElementById("tasks").appendChild(obj);
}