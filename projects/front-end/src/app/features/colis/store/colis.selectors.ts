import { createSelector } from "@ngrx/store";
import { ApplicationState } from "../../../store";

export const selectColisState = (state: ApplicationState) => state.colisList;

// N selectors
export const selectColisList = createSelector(
    selectColisState,
    (state) => state.items
);

export const selectColisListHeavyWithParam = (weight: number) => createSelector(
    selectColisState,
    (state) => state.items.filter(colis => colis.weight > weight)
);

export const selectColisListHeavy = selectColisListHeavyWithParam(10);

export const selectColisListIsLoading = createSelector(
    selectColisState,
    (state) => state.isLoading
);

export const selectColisListError = createSelector(
    selectColisState,
    (state) => state.error
);