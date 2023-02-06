const userName = document.getElementById("Username")
const save = document.getElementById("saveScore")
const recentscore = localStorage.getItem('recentScore')
const finalScore = document.querySelector('#score')
const scorebar = document.getElementById('scorebar')
const link = document.querySelectorAll('.link')
finalScore.innerText = recentscore

const highScore = JSON.parse(localStorage.getItem('HighScores')) || []

userName.addEventListener('keyup', () => {
    save.disabled = !userName.value

})

function Save(e) {
    e.preventDefault()
    const score = {
        score: recentscore,
        name: userName.value
    }
    highScore.push(score)
    highScore.sort((a, b) => b.score - a.score)
    highScore.splice(5)
    localStorage.setItem('HighScores', JSON.stringify(highScore))
    console.log(highScore)
    userName.style.visibility = "hidden"

    save.style.visibility = "hidden"
    scorebar.style.visibility = "hidden"
    link.forEach(l => {
        l.style.transform = "translateY(-10rem)"
        l.style.transition = "0ms"
    })
}