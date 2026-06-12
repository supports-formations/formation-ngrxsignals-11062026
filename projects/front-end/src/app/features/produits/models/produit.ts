import { applyEach, min, required, schema, validate } from "@angular/forms/signals";

export interface Conditionnement {
  value: string;
  name: string;
}

export const schemaConditionnement = schema<Conditionnement>(ctx => {
  required(ctx.value, { message: 'Value is required' });
  validate(ctx.value, ctx => {
    const validValues = ['box', 'bag', 'bottle'];
    if (!validValues.includes(ctx.value())) {
      return { message: `Value must be one of: ${validValues.join(', ')}`, kind: 'invalid_value' };
    }

    return null; 
  });
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