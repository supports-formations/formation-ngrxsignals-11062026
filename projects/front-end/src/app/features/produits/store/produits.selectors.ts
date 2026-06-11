import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../store";

export const selectProduitsState = (state: ApplicationState) => state.produits;

export const selectTotalWeight = createSelector(
  selectProduitsState,
  (produitsState) => produitsState.items.reduce((total, produit) => total + produit.price, 0)
);