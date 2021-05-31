import { makeObservable, observable } from "mobx";

export default class ExpenseStore {
    title = "hello";

    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}