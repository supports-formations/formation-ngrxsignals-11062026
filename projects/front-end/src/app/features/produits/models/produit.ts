import { applyEach, min, required, schema, validate } from "@angular/forms/signals";

export interface Conditionnement {
  id: number;
  name: string;
}

export const schemaConditionnement = schema<Conditionnement>(ctx => {
  min(ctx.id, 1, { message: 'ID must be at least 1' });
});

export interface Produit {
  id: number;
  name: string;
  price: number;
  type: 'food' | 'drink';
  conditionnements: Conditionnement[];
}

export type CreateProduitDto = Omit<Produit, 'id'>;

export const defaultProduit: CreateProduitDto = {
  name: '',
  price: 0,
  type: 'food',
  conditionnements: []
};

export const schemaProduit = schema<CreateProduitDto>(ctx => {
  required(ctx.name,  { message: 'Name is required' });
  min(ctx.price, 1, { message: 'Price must be at least 1' });

  applyEach(ctx.conditionnements, schemaConditionnement);

  //validate
});