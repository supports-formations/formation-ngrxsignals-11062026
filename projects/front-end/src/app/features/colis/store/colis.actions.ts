import { createAction, props } from "@ngrx/store";
import { Colis } from "../models/colis";

export type WithPayload = {
    payload: Colis
}
export const addNewOneColis = createAction('[UI] Add New One Colis', props<WithPayload>());