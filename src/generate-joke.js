import axios from 'axios'


const url = "https://icanhazdadjoke.com"
const generateJoke =()=>{
	const config = {
		headers: {
			Accept: 'application/json',
		},
	}
	axios.get(url,config).then(res=>document.querySelector('#joke').innerHTML= res.data.joke)
}

export default generateJoke;
