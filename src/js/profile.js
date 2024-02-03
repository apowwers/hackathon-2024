document.getElementById("coin").addEventListener("mouseover", coinHoverOn);

function coinHoverOn() {
  document.querySelector('#coin').setAttribute("src", "../src/images/coin_hover.png");
}

document.getElementById("coin").addEventListener("mouseout", coinHoverOff);

function coinHoverOff() {
  document.querySelector('#coin').setAttribute("src", "../src/images/coin.png");
}