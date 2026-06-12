import { Component, signal } from '@angular/core';
import { CreateProduitDto, defaultProduit, schemaProduit } from '../../models/produit';
import { form, FormField, FormRoot } from '@angular/forms/signals';

@Component({
  selector: 'app-add-one-product',
  imports: [FormRoot, FormField],
  templateUrl: './add-one-product.html',
  styleUrl: './add-one-product.css',
})
export class AddOneProduct {
  private readonly product = signal<CreateProduitDto>(defaultProduit);
  protected readonly productForm = form(this.product, schemaProduit);

  ngOnInit(): void {
    const product: CreateProduitDto = {
      name: 'Sample Product',
      price: 10,
      type: 'food',
      conditionnements: [ { id: 1, name: 'Box' }, { id: 2, name: 'Bag' } ]
    };
  //  this.product.set(product); 
  //  this.productForm().value.set(product);

    this.productForm.conditionnements().value.set([...product.conditionnements]);
    //this.productForm.conditionnements().value.update(old => [...old]);
  }

  onSubmit(): void {
    if (this.productForm().valid()) {
      const newProduct = this.productForm().value();
      console.log('Submitting product:', newProduct);
      // Here you would typically send `newProduct` to your backend API
    }
  }
}
