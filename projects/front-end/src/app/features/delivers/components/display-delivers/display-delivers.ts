import { Component, inject, signal } from '@angular/core';
import { GetListDelivers } from '../../services/get-list-delivers';
import { Deliver } from '../../models/deliver';
import { EditOneDeliver } from '../edit-one-deliver/edit-one-deliver';

@Component({
  selector: 'app-display-delivers',
  imports: [EditOneDeliver],
  templateUrl: './display-delivers.html',
  styleUrl: './display-delivers.css',
})
export class DisplayDelivers {
  private readonly getListDelivers = inject(GetListDelivers);
  protected readonly delivers = this.getListDelivers.getAllWithProducts();
  protected toEditDeliver = signal<Deliver | null>(null);

  editDeliver(item: Deliver): void {
    this.toEditDeliver.set(item);
  }
}
