import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetAllProductsFromApi } from "../services/get-all-products-from-api";
import { requestProductsFromApiAction, successGetProductsFromApiAction } from "./produits.actions";
import { map, of, switchMap } from "rxjs";

@Injectable()
export class ProductsEffect {
    private readonly actions$ = inject(Actions);
    private readonly getAllProductsFromApi = inject(GetAllProductsFromApi);

    loadAllProducts$ = createEffect(() => this.actions$.pipe(
        ofType(requestProductsFromApiAction), //1. je chope l'action depuis le component
        switchMap(() => this.getAllProductsFromApi.getAll()), // 2. je fais ma requete http pour choper les produits
        map((products) => successGetProductsFromApiAction({ payload: products })) // 3. je dispatch une action avec les produits en payload pour que le reducer puisse les stocker dans le state
    ));
}