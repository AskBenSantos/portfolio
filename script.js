const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", function(){
document.body.classList.toggle("light-mode");

if (document.body.classList.contains("light-mode")){
  themeToggle.textContent = "Dark Mode";
} else{
  themeToggle.textContent = "Light Mode";
}
});
