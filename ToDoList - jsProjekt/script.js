var inputBarId = document.getElementById("inputBarId");
var addButtonId = document.getElementById("ButtonId");
var toDos = document.getElementById("toDos");

addButtonId.addEventListener("click", function(){
    var x = document.createElement("p");
    x.innerText = inputBarId.value;
    toDos.appendChild(x);
x.addEventListener("dblclick", function(){
    toDos.removeChild(x);

});
});

exports.build = series(scssTask, jsTask);