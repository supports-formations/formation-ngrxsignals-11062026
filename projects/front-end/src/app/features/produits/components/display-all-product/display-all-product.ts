import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../../../../store';
import { requestProductsFromApiAction } from '../../store/produits.actions';
import { selectTotalWeight } from '../../store/produits.selectors';

@Component({
  selector: 'app-display-all-product',
  imports: [],
  templateUrl: './display-all-product.html',
  styleUrl: './display-all-product.css',
})
export class DisplayAllProduct implements OnInit {
  private readonly store = inject(Store<ApplicationState>);
  protected readonly totalWeight$ = this.store.select(selectTotalWeight);

  ngOnInit(): void {
    // Dispatch an action to load all products when the component initializes
    this.store.dispatch(requestProductsFromApiAction());
  }
}
