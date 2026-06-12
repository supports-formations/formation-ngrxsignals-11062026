import { httpResource } from '@angular/common/http';
import { debounced, Service, signal, Signal } from '@angular/core';
import { User } from '../models/user';
import { debounce } from 'rxjs';

@Service()
export class GetAllUsers {
    filterId = signal(0);
    private readonly debouncerId = debounced(this.filterId, 200);
    private readonly usersResource = httpResource<User[]>(() => `./users.json?id=${this.debouncerId.value()}`);

    getAllAsSignal(): Signal<User[] | undefined> {
        return this.usersResource.value;
    }
}
