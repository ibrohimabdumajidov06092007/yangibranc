const card = document.querySelector(".card-m");
function showtime() {
  let now = new Date();

  let soat = now.getHours() < 10 ? "0" + now.getDate() : now.getDate();
  let minut = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let sakund =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  card.innerHTML = `${soat}:${minut}:${sakund}`;

  setTimeout(showtime, 1000);




  
}
showtime();
