const themeClass = document.documentElement;
const imgTheme = document.getElementById("imgProfile");
const themeSelector = document.getElementById("themeSelect");

themeSelector.onclick = () => {
  themeClass.classList.toggle("light");

  if (themeClass.classList.contains("light")) {
    imgTheme.src = "./assets/light-img-profile.png";
    imgTheme.alt = "Gabriel sorrindo, camisa preta e dentro de um carro";
  } else {
    imgTheme.src = "https://avatars.githubusercontent.com/u/117778237?v=4";
  }
};
