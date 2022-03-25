import generateJoke from "./generate-joke"
import "./styles/main.scss"
import laugh from "./assets/laugh.svg"

const laughImg = document.querySelector('#laughImg')
laughImg.src=laugh;
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()
