// for(var i=0; i<5; i++) {
// 	console.log("Value of i is:"+i);
// }

var person = {firstname:"Besarta", lastname:"Pacolli", email:"test@gmail.com"};

var text='';
var z;

for (z in person ) {

	text += person[z];

}

console.log(text);

/////////////////for of//////////////////////////////

var names = ['Benjamin','Elsa','Mal'];

var x;

for(x of names );
document.write(x + "<br>");

////////do while///////////

let i=0;

do {
	i += 1;	
	console.log(i);
}
while(i<5);

var students = ["John", "Jane", "Bob"];


////challenge 1

for(i=0;i<students.length;i++){
    document.write(students[i] + "<br>");

}



var name_input = document.getElementById("name");
var btnAdd = document.getElementById("btnAdd");
var btnShow = document.getElementById("btnShow");

btnAdd.onclick= function() {

    stundent.push(name_input.value);
}


btnShow.onclick= function() {

    for(i=0;i<students.length; i++){
        document.write(students[i] + "<br>");
 
       
}
}

