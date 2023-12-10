export class Person{
    #name;
    #mail;
    #phone;
    #location;
    #currentTime;
    #picture;

    constructor(name, mail){
        this.#name = name;
        this.#mail = mail;
    }

    get name(){
        return this.#name;
    }

    get mail(){
        return this.#mail;
    }

    get phone(){
        return this.#phone;
    }

    get location(){
        return this.#location;
    }

    get currentTime(){
        return this.#currentTime;
    }

    get picture(){
        return this.#picture;
    }

    set name(name){
        this.#name = name;
    }

    set mail(mail){
        this.#mail = mail;
    }

    set phone(phone){
        this.#phone = phone;
    }

    set location(location){
        this.#location = location;
    }

    set currentTime(currentTime){
        this.#currentTime = currentTime;
    }

    set picture(picture){
        this.#picture = picture;
    }
}
