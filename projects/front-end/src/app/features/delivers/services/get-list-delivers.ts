import { computed, Service, Signal, signal } from '@angular/core';
import { defaultDelivers, Deliver } from '../models/deliver';

@Service()
export class GetListDelivers {
    private readonly store = signal(defaultDelivers);

    getAll(): Signal<Deliver[]> {
        return this.store.asReadonly();
    }

    getAllWithProducts(): Signal<Deliver[]> {
        return computed(() => {
            const delivers = this.store();
            const results = delivers.filter((deliver) => deliver.colisIds.length > 0);
            return results;
        });
    }

    dispatchAll(delivers: Deliver[]) {
        this.store.set(delivers);
    }

    dispatchOne(deliver: Deliver) {
        this.store.update((current) => [...current, deliver]);
    }
}
