//Persona
const urlPerson = 'https://randomuser.me/api/?inc=name,email,phone,picture,location';

export async function personFromApi(){
    return new Promise((resolve, reject) => {
        fetch(urlPerson)
        .then((response)=>response.json().then((data)=>resolve(data.results[0])))
        .catch((error)=>reject(error));
    });
}


//Tiempo
let p = await personFromApi();
let city = p.location.city;
console.log(p);

const urlTime = `https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${city}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6be6de184bmshd08b382933cb9e1p12523ejsna4be37536d57',
        'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
    }
};


export async function timefromApi(){
    return new Promise((resolve, reject) => {
        fetch(urlTime, options)
        .then((response)=>response.json().then((data)=>resolve(data)))
        .catch((error)=>reject(error));
    });
}