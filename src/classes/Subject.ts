import Observer from "./Observer"
import ISubject from "../interfaces/ISubject"

export default class Subject implements ISubject{
    private observers: Observer[] = []
    subscribe(observer: Observer): void {
        this.observers.push(observer)
    }
    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs.id !== observer.id)
    }
    notify(observer: Observer): void {
        observer.update()
    }
    notifyAll(): void {
        this.observers.forEach(observer => observer.update())
    }

}