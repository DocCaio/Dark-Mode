document.querySelector("#btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    let paragrafo = document.querySelector('p')
document.body.classList.contains('dark-mode')
? paragrafo.textContent = 'Come to the dark side'
: paragrafo.textContent = 'May the force be with you'

})