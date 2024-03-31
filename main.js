function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["fenemy"].value;
    var z = document.forms["myForm"]["fhero"].value;
    var a = document.forms["myForm"]["fgame"].value;
    var b = document.forms["myForm"]["fboss"].value;
    var c = 0;
    if (x == "") {
        alert("Name must be filled out");
        c+1;
    }
    if (y == "") {
        alert("Enemy must be filled out");
        c+1;
    }
    if (z == "") {
        alert("Hero must be filled out");
        c+1;
    }
    if (a == "") {
        alert("Game must be filled out");
        c+1;
    }
    if (b == "") {
        alert("Boss must be filled out");
        c+1;
    }
    if(c>0){
        return false;
    }
}