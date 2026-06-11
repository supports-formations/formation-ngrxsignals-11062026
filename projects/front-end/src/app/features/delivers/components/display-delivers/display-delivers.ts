import { Component, inject } from '@angular/core';
import { GetListDelivers } from '../../services/get-list-delivers';

@Component({
  selector: 'app-display-delivers',
  imports: [],
  templateUrl: './display-delivers.html',
  styleUrl: './display-delivers.css',
})
export class DisplayDelivers {
  private readonly getListDelivers = inject(GetListDelivers);
  protected readonly delivers = this.getListDelivers.getAllWithProducts();

}
