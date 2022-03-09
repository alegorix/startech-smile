

window.onload = function () {
    document.getElementById("btn-fun").onclick = function () {
        document.getElementById("normal").style.display = 'none';
        document.getElementById("sad").style.display = 'none';
        document.getElementById("fun").style.display = 'block';
    };
    document.getElementById("btn-normal").onclick = function () {
        document.getElementById("sad").style.display = 'none';
        document.getElementById("normal").style.display = 'block';
        document.getElementById("fun").style.display = 'none';
    };
    document.getElementById("btn-sad").onclick = function () {
        document.getElementById("sad").style.display = 'block';
        document.getElementById("normal").style.display = 'none';
        document.getElementById("fun").style.display = 'none';
    };
};