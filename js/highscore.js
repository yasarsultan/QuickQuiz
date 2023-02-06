const setHighScore = document.getElementById("setHighScore")
const highScores = JSON.parse(localStorage.getItem('HighScores'))
setHighScore.innerHTML = highScores.map(score => {
    return (`<li class="list">${score.name} - ${score.score}</li>`)
}).join(" ")