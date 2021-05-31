import { createContext, useContext } from "react";
import ExpenseStore from "./expenseStore";

interface Store {
    expenseStore: ExpenseStore
}

export const store: Store = {
    expenseStore: new ExpenseStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}