var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if (ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    var createLi = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var newTxt = document.createTextNode(inputValue);
    createLi.appendChild(newTxt);
    if(inputValue == "") {
       alert("Пусто!");
    } else {
       document.getElementById('list').appendChild(createLi);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var closeBtn = document.createTextNode("X");
    span.className = "close";
    span.appendChild(closeBtn);
    createLi.appendChild(span);
}