const questions = [{

        ques: "what is javascript?",
        choice1: "programming language",
        choice2: "human language",
        choice3: "alien language",
        choice4: "markup language",
        answer: 1
    },
    {

        ques: "If there are multiple recycle bin for hard disk",
        choice1: "You can set different size for each recycle bin",
        choice2: "You can choose which recycle bin to use to store your deleted files",
        choice3: "You can make any one of them default recycle bin",
        choice4: "All of the above",
        answer: 1
    },
    {
        ques: "The ________ contains commands associated with the My Computer window",
        choice1: "Standard menu",
        choice2: "Start menu",
        choice3: "System menu",
        choice4: "None of the above",
        answer: 3
    },
    
    {
        ques: "_______ is the layer of a computer system between the hardware and the user program",
        choice1: "Operating environment",
        choice2: "Operating system",
        choice3: "System environment",
        choice4: "None of these",
        answer: 2
    },
    
    {
        ques: "The purpose of run command in start menu is to",
        choice1: "Launch internet browser",
        choice2: "Open internet explorer",
        choice3: "Start programs",
        choice4: "Open windows explorer",
        answer: 3
    },
    
    {
        ques: "Which protocol provides e-mail facility among different hosts",
        choice1: "TELNET",
        choice2: "SMTP",
        choice3: "FTP",
        choice4: "SNMP",
        answer: 2
    },

    {
        ques: "The basic architecture of computer was developed by",
        choice1: "John Von Neumann",
        choice2: "Charles Babbge",
        choice3: "Blaise Pascal",
        choice4: "Garden Moore",
        answer: 1
    },

    {
        ques: "DNS in internet technology stands for",
        choice1: "Distributed Name System",
        choice2: "Data Name System",
        choice3: "Dynamic Name System",
        choice4: "Domain Name System",
        answer: 4
    },

    {
        ques: "Memories which one can be read only are called _________.",
        choice1: "RAM",
        choice2: "ROM",
        choice3: "DRAM",
        choice4: 'Secondary Memory',
        answer: 2
    },

    {
        ques: "Conversion of decimal number 61 to it's binary number equivalent is",
        choice1: 110011,
        choice2: 11001110,
        choice3: 111101,
        choice4: 11111,
        answer:  3
    },

]
let currentquestion = {}
let acceptanswer = false
const choices = document.querySelectorAll('[data-number]')
const question = document.querySelector('[data-question]')
const submit = document.querySelector('[data-submit]')
const updatenumber = document.getElementById('number')
const updatescore = document.getElementById('update')
let available = []
const bonus = 10
const maxquestions = 7
let questionnumber = 0
let score = 0
available = [...questions]
let playgame = true


startGame = () => {
    if (questionnumber === maxquestions) {
        localStorage.setItem('recentScore', score)
        playgame = false
        location.assign('end.html')
        return
    }
    updatescore.innerText = `${score}`
    getNewQuestion()
}
getNewQuestion = () => {
    questionnumber++
    updatenumber.innerText = `${questionnumber}/${maxquestions}`
    const index = Math.floor(Math.random() * available.length)
    currentquestion = available[index]
    question.innerText = currentquestion.ques
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentquestion['choice' + number]
        choice.style.backgroundColor = 'white'
    })
    if (available.length > 1) {
        available.splice(index, 1)
    }
    acceptanswer = true
}

if (playgame) {
    startGame()
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            if (!acceptanswer) {
                return
            }
            const number = parseInt(choice.dataset['number'])
            if (number === parseInt(currentquestion['answer'])) {

                choice.style.backgroundColor = "green"
                acceptanswer = false
                score += bonus
                setTimeout(startGame, 500)
                return
            }
            acceptanswer = false
            choice.style.backgroundColor = "red"
            setTimeout(startGame, 500)
        })
    })
}