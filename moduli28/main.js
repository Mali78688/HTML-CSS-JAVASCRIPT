var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');
var button4 = document.getElementById('btn4');
var v_text = document.getElementById('txt1');


button1.onclick = function() {

alert('hello');
}
button2.onmouseover = function() {

    alert('hello');
    }
    button3.onmouseleave = function() {

        alert('leave');
        }
        button4.onmousewheel = function() {

            alert('leave');
            }



v_text.onclick = function() {

v_text.style.color= 'red';
v_text.style.background= 'black';
v_text.style.textAlign= 'center';


}  
v_text.onclick = function() {

v_text.setAttribute('class',"text");

}


// var firstButton = document.querySelector('button');

// firstButton.onclick = fuction() {
// alert('hello world');

// }


// button3.addEventListener('click',fuction() {


// alert('helloworld');



// }

// )