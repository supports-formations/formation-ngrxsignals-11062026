import { Service, Signal, signal } from '@angular/core';

@Service()
export class FilterDelivers {
    private readonly store = signal<Date | undefined>(undefined);

    dispatch(date: Date): void {
        this.store.set(date);
    }

    get asReadonly(): Signal<Date | undefined>   {
        return this.store.asReadonly();
    }
}
