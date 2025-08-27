import { createReducer, on, State } from "@ngrx/store";
import { decrement, increment, set } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value),
    on(decrement, (state, action) => state - action.value),
    on(set, (State, action) => action.value)
);