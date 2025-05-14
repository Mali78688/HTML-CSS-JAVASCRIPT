// function printName() {
// 	document.write("Test1");
// 	document.write("<br>");
// 	setTimeout(function() {document.write("test2");}, 3000);
// 	document.write("test3");
// }

// printName();

var colors = ["red", "green", "blue"];

function changeBgColor(){

    document.querySelector('body').style.background=colors[Math.floor(Math.random()*colors.lenght)];

}

var names = ["John", "Mary", "Jane"];

function changeNames(){

    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*colors.lenght)]  
}


setInterval(changeBgColor, 1000)
setInterval(changeBgColor, 1000)

var circle = document.getElementById('circle');
var showtime = document.getElementById('time');

function showCircle(){
    circle.style.display = 'block';
    circle.style.top = Math.floor(Math.random()*window.innerHeight) + 'px';
    circle.style.left = Math.floor(Math.random()*window.innerWidth) + 'px';
    circle.style.backgroundColor = randomColor();
    timestart = new Date().getTime();


}

showCircle();