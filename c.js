function name1() {
  for (let i = 0; i < 1; i++) {
    boyi = prompt("boyi");
    if (boyi != "" && boyi != null) {
    } else {
      i--;
    }
  }
}
name1();
function name2() {
  for (let i = 0; i < 1; i++) {
    ogirligi = prompt("vazni");
    if (ogirligi != "" && ogirligi != null) {
    } else {
      i--;
    }
  }
}
name2();
let x = ogirligi / (boyi * boyi);
let r = Math.floor(x);
if (x <= 18) {
  a = "kam vazn";
} else if (x <= 25) {
  a = "oddiy";
} else if (x <= 30) {
  a = "ortiqcha vazn";
} else if (x > 30) {
  a = "o`ta semiz";
}

const rrr = document.querySelector(".box");

rrr.innerHTML += `
     <p>${a} ${r}</p>
  `;
