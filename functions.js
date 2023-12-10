import { Person } from "./Person.js";
import { Time } from "./Time.js";
import * as Api from './ApiFetch.js';

export async function timeToClass(timeObject){
    return new Promise((resolve, reject) => {
        try{
            const time = new Time(timeObject.hour, timeObject.minute)
            resolve(time);
        }catch(error){
            reject(error);
        }
    });
}

export async function personToClass(personObject, timeObject){
    return new Promise((resolve, reject) => {
        try {
            const person = new Person(`${personObject.name.first} ${personObject.name.last}`, personObject.email);
            person.phone = personObject.phone;
            person.location = personObject.location.city;
            person.picture = personObject.picture.medium;
            person.currentTime = timeObject.getTime();
            resolve(person);
        } catch (error) {
            reject(error);
        }
    });
    
}

export async function generateUser(img, nombre, mail, phone, location, currentTime){
    return new Promise(async (resolve, reject) => {
        try {
            let time = await Api.timefromApi();
            time = await timeToClass(time);

            let person = await Api.personFromApi();
            person = await personToClass(person, time);

            img.src = person.picture;
            nombre.innerHTML = `<p><strong>Name:</strong> ${person.name}</p>`;
            mail.innerHTML = `<p><strong>Mail:</strong> ${person.mail}</p>`;
            phone.innerHTML = `<p><strong>Phone:</strong> ${person.phone}</p>`;
            location.innerHTML = `<p><strong>Location:</strong> ${person.location}</p>`;
            currentTime.innerHTML = `<p><strong>Current Time:</strong> ${person.currentTime}</p>`;

            resolve(person);
        } catch (error) {
            reject(error);
        }
    });
    
    
}