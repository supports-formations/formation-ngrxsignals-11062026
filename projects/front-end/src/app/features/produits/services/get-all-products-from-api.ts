import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Produit } from '../models/produit';

@Service()
export class GetAllProductsFromApi {
    private readonly http = inject(HttpClient);
    private readonly products$ = this.http.get<Produit[]>('./products.json');

    getAll() {
        return this.products$;
    }
}
