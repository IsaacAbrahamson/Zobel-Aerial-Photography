document.ontouchmove = (e) => e.preventDefault()

window.onload = () => {
  document.getElementById("loader").style.opacity = "0"
  // wait for animation to end and then remove
  setTimeout(() => document.getElementById("loader").style.display = "none", 300)

  // enable scrolling
  document.querySelector("main").classList.remove("noscroll")
  document.ontouchmove = () => true
}