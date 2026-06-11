import { inject, Service } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../store';
import { addNewOneColis } from '../store/colis.actions';
import { Colis } from '../models/colis';

@Service()
export class SaveNewOneColis {
    private readonly store = inject(Store<ApplicationState>);

    add(colis: Colis) {
        this.store.dispatch(addNewOneColis({ payload: colis }));
    }
}
