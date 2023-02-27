function clearscr(){
    document.getElementById("scr").value = "";
};
function display(value){
    document.getElementById("scr").value += value;
};
function calc(){
    var p = document.getElementById("scr").value;
    var q = eval(p);
    document.getElementById("scr").value = q;
}
