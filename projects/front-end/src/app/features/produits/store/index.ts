import { createReducer, on } from "@ngrx/store";
import { Produit } from "../models/produit";
import { successGetProductsFromApiAction } from "./produits.actions";

export interface ProductsState {
    items: Produit[];
    isLoading: boolean;
}

export const initialProductsState: ProductsState = {
    items: [],
    isLoading: false,
}

export const productsReducer = createReducer(
    initialProductsState,

    on(successGetProductsFromApiAction, (state, { payload }) => ({
        ...state,
        items: payload,
        isLoading: false,
    })),
);