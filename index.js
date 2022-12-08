const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// Open Sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// close Sidebar
closebtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle(".dark-theme-variable");
  themeToggler.querySelector("span").classList.toggle("active");
});
