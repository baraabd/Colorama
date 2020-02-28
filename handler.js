function changeColor() {

    var input = document.getElementById("txtcolor").value
    console.log(input)
    document.getElementById("backcolor").style.backgroundColor = document.getElementById("txtcolor").value
    document.getElementById("txtcolor").value = ""
}

function check(evt) {
    var keycode = evt.keyCode
    if (keycode === 13) {
        changeColor()
    }
    console.log(keycode)
}

var s = setTimeout(() => {

})