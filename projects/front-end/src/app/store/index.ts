import { ActionReducerMap } from "@ngrx/store";
import { colisListReducer, ColisListState } from "../features/colis/store";

export interface ApplicationState {
    colisList: ColisListState;
}


export const reducers: ActionReducerMap<ApplicationState> = {
    colisList: colisListReducer
}