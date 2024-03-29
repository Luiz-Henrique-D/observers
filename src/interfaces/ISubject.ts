import IObserver from "./IObserver"
export default interface ISubject{
    subscribe(observer: IObserver): void
    unsubscribe(observer: IObserver): void
    notify(observer: IObserver): void
    notifyAll(): void
}