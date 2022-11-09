/*This will contain JS code*/


const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke();



//Async and await data request

async function generateJoke(){
    const headerConfig = {
      headers: {
        Accept:'application/json',
      }
    }
    const getJoke = await fetch('https://icanhazdadjoke.com', headerConfig)

    const jokeData = await getJoke.json()

    jokeEl.innerHTML = jokeData.joke


}

// fetch data with fetch . then .then syntex
function fetchJokes(){
  const headerConfig = {
    headers: {
      Accept:'application/json',
    }
  }

fetch('https://icanhazdadjoke.com', headerConfig)
.then(res=>res.json())
.then(data => {
  jokeEl.innerHTML = data.joke
})
}
