// COUNT FUNCTIONALITY
let count;
count = 0;
document.getElementById("iincrement").onclick = function () {
    count += 1;
    document.getElementById("count_label").innerHTML = count;
}
document.getElementById("ireset").onclick = function () {
    count = 0;
    document.getElementById("count_label").innerHTML = count;
}
document.getElementById("idecrement").onclick = function () {
    count -= 1;
    document.getElementById("count_label").innerHTML = count;
}



