function moveUp () {
    let currentDown = parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = currentTop - 3  + "px";
}
function moveLeft () {
    let currentLeft = parseInt(document.getElementById('tank').style.left.slice(0, 2));
    document.getElementById('tank').style.left = currentLeft - 3 + "px";
}
function moveRight () {
    let currentRight = parseInt(document.getElementById('tank').style.left.slice(0, 2));
    document.getElementById('tank').style.left = currentRight + 3 + "px";
}
function moveDown () {
    let currentDown = parseInt(document.getElementById('tank').style.left.slice(0, 2));
    document.getElementById('tank').style.top = currentDown + 3 + "px";
}