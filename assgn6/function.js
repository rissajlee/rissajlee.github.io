// On click on PDP, make visible glaze choice 
document.getElementById("none").onclick = function() {
    document.getElementById("none").style.color = "orange";
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "black";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/original.jpg")
};

document.getElementById("sugarmilk").onclick = function() {
    document.getElementById("sugarmilk").style.color = "orange";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "black";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/originalSugar.jpg")

};

document.getElementById("vanillamilk").onclick = function() {
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "orange";
    document.getElementById("doublechoc").style.color = "black";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/originalVanilla.jpg")

};

document.getElementById("doublechoc").onclick = function() {
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "orange";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/originalChoc.jpg")

};

function Bun (quantity, glaze, price) {
    this.quantity = quantity;
    this.glaze = glaze;
    this.price = price;
};

function addQuantity() {
    // Referenced https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
    var radioNumber = document.querySelector('input[name=numberOfBuns]:checked').value;
    var oldTotal = parseInt(sessionStorage.getItem("total"));
    var newTotal = parseInt(radioNumber) + oldTotal;
    sessionStorage.setItem("total", newTotal);
    console.log(newTotal);
    document.getElementById("cartValue").innerHTML = "(" + newTotal + ")";
}


function onLoad() {
    // to check if something has already been loaded
    if (sessionStorage.getItem("total") == null) {
        sessionStorage.setItem("total", 0);
        console.log(sessionStorage.getItem("total"));
    } else {
        document.getElementById("cartValue").innerHTML = "(" + sessionStorage.getItem("total") + ")";
    }


  };
