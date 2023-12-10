import { generateUser } from './functions.js';

const container = document.getElementsByClassName("container")[0];

const card = document.createElement("div");
card.className = "card";
container.appendChild(card);

const img = document.createElement("img");
img.src = "./user_nt_found.jpg";
card.appendChild(img);

const nombre = document.createElement("span");
nombre.innerHTML = `<p><strong>Name:</strong> name surname</p>`;
card.appendChild(nombre);

const mail = document.createElement("span");
mail.innerHTML = `<p><strong>Mail:</strong> mail</p>`;
card.appendChild(mail);

const phone = document.createElement("span");
phone.innerHTML = `<p><strong>Phone:</strong> phone</p>`;
card.appendChild(phone);

const location = document.createElement("span");
location.innerHTML = `<p><strong>Location:</strong> city</p>`;
card.appendChild(location);

const currentTime = document.createElement("span");
currentTime.innerHTML = `<p><strong>Current Time:</strong> time</p>`;
card.appendChild(currentTime);

const button = document.createElement("button");
button.innerHTML = 'GENERATE USER';
container.appendChild(button);

button.addEventListener("click", async()=>await generateUser(img, nombre, mail, phone, location, currentTime));

