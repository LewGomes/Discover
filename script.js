function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("profile img")

  // if (html.classList.contains("light")) {
  //   img.setAttribute("src", "./assets/LeonardoPicture-light.jpeg")
  // } else {
  //   img.setAttribute("src", "./assets/LeonardoPicture.png")
  //   } COMENTAR BASTANTE, CRTL + K E CRTL + C
  // }
}
