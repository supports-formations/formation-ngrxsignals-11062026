import { inject, Service } from '@angular/core';
import { ApplicationState } from '../../../store';
import { select, Store } from '@ngrx/store';
import { selectColisList, selectColisListHeavyWithParam } from '../store/colis.selectors';
import { Observable } from 'rxjs';
import { Colis } from '../models/colis';

@Service()
export class GetAllColis {
    private readonly store = inject(Store<ApplicationState>); 
    private readonly getAllColis$ = this.store.pipe(
        select(selectColisListHeavyWithParam(20))
    );

    getAll(): Observable<Colis[]> {
        return this.getAllColis$;
    }
}
