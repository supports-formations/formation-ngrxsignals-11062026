import { createAction, props } from "@ngrx/store";
import { Produit } from "../models/produit";

export const requestProductsFromApiAction = createAction('[UI] Request products from API');

export type WithPayload = {
    payload: Produit[];
}
export const successGetProductsFromApiAction = createAction('[API] Success get products from API', props<WithPayload>());