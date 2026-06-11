import { ActionReducerMap } from "@ngrx/store";
import { colisListReducer, ColisListState } from "../features/colis/store";
import { productsReducer, ProductsState } from "../features/produits/store";

export interface ApplicationState {
    colisList: ColisListState,
    produits: ProductsState
}


export const reducers: ActionReducerMap<ApplicationState> = {
    colisList: colisListReducer,
    produits: productsReducer,
}