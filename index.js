
let username
document.getElementById("mysubmit").onclick = function(){
username=document.getElementById("input").value;
document.getElementById("upper").textContent = `Hello - ${username}`;
}