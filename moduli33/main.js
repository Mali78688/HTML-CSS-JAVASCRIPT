function validation() {

    var name = document.getElementById("name").value;
    var valid_name_regex = /^[a-zA-Z]+$/;

    var age = document.getElementById("age").value;
    var valid_name_regex = /^[0-9]+$/;

    var city = document.getElementById("city").value;

    if(! (name.match(valid_name_regex)) |  (!(age.match(valid_age_regex)) | (city == ""))+ {
        if(! (name.match(valid_name_regex))) {

            document.getElementById("name_error").style.visibility="hidden";
            document.getElementById("name").style.borderColor="black"; 
        }
        else {

            document.getElementById("name_error").style.visibility="hiddin";
            document.getElementById("name").style.borderColor="black";
        }

        
    if(! (name.match(valid_name_regex)) |  (!(age.match(valid_age_regex)) | (city == "")) ){
        if(! (name.match(valid_age_regex))) {

            document.getElementById("age_error").style.visibility="hidden";
            document.getElementById("age").style.borderColor="black"; 
        }
        else {

            document.getElementById("age_error").style.visibility="hiddin";
            document.getElementById("age").style.borderColor="black";
        }

        if(city == "") {
            document.getElementById("city_error").style.visibility="visible";
            document.getElementById("city").style.borderColor="red";

}
else {
    document.getElementById("city_error").style.visibility="hidden";
    document.getElementById("city").style.borderColor="black";
}
}
}
}