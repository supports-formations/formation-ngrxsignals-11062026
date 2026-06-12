import { Component, inject } from '@angular/core';
import { GetAllColis } from '../../services/get-all-colis';
import { AsyncPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Colis } from '../../models/colis';

@Component({
  selector: 'app-display-all-colis',
  imports: [AsyncPipe],
  templateUrl: './display-all-colis.html',
  styleUrl: './display-all-colis.css',
})
export class DisplayAllColis {
  private readonly getAllColis = inject(GetAllColis);
  //protected readonly colisList$ = toSignal<Colis[]>(this.getAllColis.getAll());
  protected readonly colisListAsSignal = this.getAllColis.getAllAsSignal();
}
