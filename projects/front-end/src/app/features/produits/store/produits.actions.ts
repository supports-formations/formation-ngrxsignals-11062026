import { createAction, props } from "@ngrx/store";
import { Produit } from "../models/produit";

export type WithPayload = {
    payload: Produit[];
}

export type WithFiltersType = {
    payload: number;
}
export const requestProductsFromApiAction = createAction('[UI] Request products from API', props<WithPayload>());


export const successGetProductsFromApiAction = createAction('[API] Success get products from API', props<WithPayload>());