import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { ItemEvent } from '../models/event';

export interface EventsState {
  events: ItemEvent[];
  loading: boolean;
  error ?: string | null;
}

export const initialEventsState: EventsState = {
  events: [],
  loading: false
};

// de base, le store doit etre injecté par composant
export const EventsStore = signalStore(
    { providedIn: 'root' },
    withState<EventsState>(initialEventsState),
    withComputed(store => ({
        eventsToday: computed(() => store.events().filter(event => event.date.toDateString() === new Date().toDateString())),
    })),
    withMethods(store => ({
        addNewOneEvent(event: ItemEvent): void {
            patchState(store, {
                events: [...store.events(), event]
            });
        }
    }))
)
