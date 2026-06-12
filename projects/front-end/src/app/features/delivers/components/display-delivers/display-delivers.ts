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
  protected readonly resource = this.getListDelivers.deliversAsResource; 
  protected readonly isLoading = this.getListDelivers.isLoading;
  protected readonly delivers = this.getListDelivers.getAllWithProducts();
  protected toEditDeliver = signal<Deliver | null>(null);

  constructor() {
    console.info('DisplayDelivers component constructor');
  }

  ngOnInit(): void {
    console.info('ngOnInit', this.delivers());
    const list = this.delivers(); // qu'une fois, on ne s'abonne pas ici, on récup juste la dernière (donc la première) valeur de la liste des delivers
  }

  editDeliver(item: Deliver): void {
    const list = this.delivers();

    this.toEditDeliver.set(item);
  }
}
