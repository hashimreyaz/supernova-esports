// (reserved for animations later)
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  };
  document.getElementById("datetime").textContent = now.toLocaleDateString("en-US", options);
}
//run immediately
updateDateTime();

//update every second
setInterval(updateDateTime, 1000);