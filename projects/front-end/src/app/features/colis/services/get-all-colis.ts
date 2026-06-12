import { computed, inject, Service, Signal } from '@angular/core';
import { ApplicationState } from '../../../store';
import { select, Store } from '@ngrx/store';
import { selectColisList, selectColisListHeavyWithParam } from '../store/colis.selectors';
import { Observable } from 'rxjs';
import { Colis } from '../models/colis';
import { rxResource } from '@angular/core/rxjs-interop';

@Service()
export class GetAllColis {
    private readonly store = inject(Store<ApplicationState>); 
    private readonly getAllColis$ = this.store.pipe(
        select(selectColisListHeavyWithParam(20))
    );

    private readonly colisAsResource = rxResource({
        defaultValue: [],
        stream: () => this.getAllColis$
    });

    filterColisListByWeight(weight: number): Signal<Colis[]> {
        return computed(() => this.colisAsResource.value().filter(colis => colis.weight > weight));
    }

    getAllAsSignal(): Signal<Colis[]> {
        return this.colisAsResource.value;
    }

    getAll(): Observable<Colis[]> {
        return this.getAllColis$;
    }
}
