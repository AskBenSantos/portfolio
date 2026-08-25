const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", function(){
document.body.classList.toggle("light-mode");
themeToggle.textContent = 'Dark Mode'
});
