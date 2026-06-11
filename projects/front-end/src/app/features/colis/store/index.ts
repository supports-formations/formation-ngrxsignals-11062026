import { createReducer, on } from "@ngrx/store";
import { ColisList } from "../models/colis";
import { addNewOneColis } from "./colis.actions";

export interface ColisListState {
    items: ColisList;
    isLoading: boolean;
    error: string | null;
}

export const initialColisListState: ColisListState = {
    items: [],
    isLoading: false,
    error: null,
};

export const colisListReducer = createReducer(
    initialColisListState,

    on(addNewOneColis, (state, action) => {
        const colis = action.payload;

        const newItems = [...state.items, colis];
        const newState = {
            ...state,
            items: newItems,
        };

        return newState;
    })
);