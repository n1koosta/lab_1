document.addEventListener("DOMContentLoaded",function (event) {
    var btn = document.getElementById("btn");
    var input = document.querySelector('.cnt input[type="text"]');
    var list = document.querySelector('.cnt ul');
    var myForm = document.querySelector("form");





    function getText(e) {
        e.preventDefault();
        var text = input.value;
        var newLi = document.createElement("li");
        newLi.textContent = text;
        list.appendChild(newLi);
        input.value = "";


document.getElementById('clickme').removeAttribute("class", "displayon");
document.getElementById('clickme').setAttribute("class", "displayoff");

document.getElementById('start').removeAttribute("class", "displayoff");
document.getElementById('start').setAttribute("class", "displayon");

}
myForm.onsubmit = getText;


});

function startfunc() {
    /*var cl1=document.getElementsByClassName("cnt");
    var elem = document.createElement();
    elem.settAtribute("class","displayoff");*/
    document.getElementById('clickme').removeAttribute("class", "displayoff");
    document.getElementById('clickme').setAttribute("class", "displayon");

    document.getElementById('start').setAttribute("class", "displayoff");
}
