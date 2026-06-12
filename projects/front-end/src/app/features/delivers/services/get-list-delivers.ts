import { computed, inject, Service, Signal, signal } from '@angular/core';
import { defaultDelivers, Deliver } from '../models/deliver';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, retry, tap } from 'rxjs';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { FilterDelivers } from './filter-delivers';

@Service()
export class GetListDelivers {
    private readonly filterStore = inject(FilterDelivers);
    //private readonly store = signal(defaultDelivers);
    private readonly http = inject(HttpClient);
    private readonly delivers$ = this.http.get<Deliver[]>('./delivers.json').pipe(
        tap((delivers) => console.log('delivers from api', delivers)),
        delay(1000),
        retry({ count: 3, delay: 200 })
    );
    //private readonly deliversAsSignal = toSignal(this.delivers$,  { initialValue: [] });
    readonly deliversAsResource = rxResource({
        params: () => this.filterStore.asReadonly(),
        defaultValue: [],
        stream: (filter) => this.http.get<Deliver[]>('./delivers.json?date=' + filter?.params.toISOString())
        // stream: (filter) => this.delivers$.pipe(
        //     map((delivers) => {
        //         if (!filter ) {
        //             return delivers;
        //         }
        //         return delivers.filter((deliver) => {
        //             if(! filter || !filter.params) {
        //                 return true;
        //             }

        //             const date = filter.params
        //             return deliver.date.toString() === date.toString();
        //         });
        //     }
        // ))
    });

    constructor() {
        console.info('GetListDelivers constructor');
    }

    getAllFromApi(): Signal<Deliver[] | undefined> {
        return this.deliversAsResource.value;
    }

    // getAllFromApi(): Observable<Deliver[]> {
    //     return this.http.get<Deliver[]>('./delivers.json').pipe(
    //         tap((delivers) => {
    //             this.store.set(delivers);
    //         })
    //     );
    // }

    getAll(): Signal<Deliver[]> {
        return this.deliversAsResource.value;
    }

    get isLoading(): Signal<boolean> {
        console.info('isLoading:resource', this.deliversAsResource);
        return this.deliversAsResource.isLoading;
    }

    getAllWithProducts(): Signal<Deliver[]> {
        return computed(() => {
            const delivers = this.deliversAsResource.value();
            const results = delivers.filter((deliver) => deliver.colisIds.length > 0);
            return results;
        });
    }

    dispatchAll(delivers: Deliver[]) {
        this.deliversAsResource.set(delivers);
    }

    dispatchOne(deliver: Deliver) {
        this.deliversAsResource.update((current) => [...current, deliver]);
    }
}
