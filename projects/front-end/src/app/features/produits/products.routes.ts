import { Routes } from "@angular/router";
import { AddOneProduct } from "./components/add-one-product/add-one-product";

export const productsRoutes: Routes = [
    {
        path: 'add',
        component: AddOneProduct
    }
];