var inputBarId = document.getElementById("inputBarId");
var addButtonId = document.getElementById("ButtonId");
var toDos = document.getElementById("toDos");

addButtonId.addEventListener("click", function(){  //moznos pridat todo 
    var x = document.createElement("p");
    x.innerText = inputBarId.value;
    toDos.appendChild(x);
    
    x.addEventListener("click", function(){ // vičiarknúť čo už je hotové
        x.style.textDecoration = "line-through";
    });
    
x.addEventListener("dblclick", function(){ // remove todo 
    toDos.removeChild(x);

});
});

exports.build = series(scssTask, jsTask);