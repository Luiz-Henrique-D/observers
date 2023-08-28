import IObserver from "../interfaces/IObserver"

export default class Observer implements IObserver {
    constructor(public id: number){}
    update(): void {
        console.log("Observer: Reacted to the event")
    }
}