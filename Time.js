export class Time{
    #hour;
    #minute;

    constructor(hour, minute){
        this.#hour = hour;
        this.#minute = minute;
    }

    get hour(){
        return this.#hour;
    }

    get minute(){
        return this.#minute;
    }

    set hour(hour){
        this.#hour = hour
    }

    set minute(minute){
        this.#minute = minute;
    }

    getTime(){
        return `${this.#hour}:${this.#minute}`;
    }
}