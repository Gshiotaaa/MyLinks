const themeClass = document.documentElement;
const imgTheme = document.getElementById("imgProfile");
const themeSelector = document.getElementById("themeSelect");

themeSelector.onclick = () => {
  themeClass.classList.toggle("light");

  if (themeClass.classList.contains("light")) {
    imgTheme.src = "https://avatars.githubusercontent.com/u/54602228?v=4";
    imgTheme.alt = "Este cidadão é putaozão";
  } else {
    imgTheme.src = "https://avatars.githubusercontent.com/u/117778237?v=4";
  }
};
