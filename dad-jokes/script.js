// fetch('https://restcountries.com/v3.1/all')
// .then(res=>res.json())
// .then(data=>{
//     data.map(resp=>console.log(resp.name.common +" its capital is:: "  ) )
//     data.map(sp=>console.log(JSON.stringify(sp.languages)))
// })

const jokeEL = document.getElementById('joke');
const jokeBtn= document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke )




//Async function to fetch jokes
async function generateJoke(){

    const headerReq = {
        headers:{
            "Accept" : 'application/json',
        },
    }

    const response = await fetch('https://icanhazdadjoke.com/', headerReq)

    const data = await response.json();
    jokeEL.innerHTML= data.joke



}

// Fetch and . then to show the jokes from api
fetchJoke();

function fetchJoke(){

    const headerReq = {
        headers:{
            "Accept" : 'application/json'
        }
    }
    
    fetch('https://icanhazdadjoke.com/', headerReq)
    .then(response=>response.json())
    .then(data=>{
        jokeEL.innerHTML= data.joke
    })
}