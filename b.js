function name1() {
  for (let i = 0; i < 1; i++) {
    a = prompt("ismingizni yozing");
    if (a != "" && a != null) {
    } else {
      i--;
    }
  }
}
name1();
let b = a.split("").reverse().join("");
const box = document.querySelector(".box").innerHTML += `
     <p>${b}</p>
  `;
