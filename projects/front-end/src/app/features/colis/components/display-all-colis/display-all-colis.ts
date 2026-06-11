import { Component, inject } from '@angular/core';
import { GetAllColis } from '../../services/get-all-colis';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-display-all-colis',
  imports: [AsyncPipe],
  templateUrl: './display-all-colis.html',
  styleUrl: './display-all-colis.css',
})
export class DisplayAllColis {
  private readonly getAllColis = inject(GetAllColis);
  protected readonly colisList$ = this.getAllColis.getAll();
}
