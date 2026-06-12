import { Component, input } from '@angular/core';
import { Deliver } from '../../models/deliver';

@Component({
  selector: 'app-edit-one-deliver',
  imports: [],
  templateUrl: './edit-one-deliver.html',
  styleUrl: './edit-one-deliver.css',
})
export class EditOneDeliver {
  item = input.required<Deliver>();

  ngOnInit(): void {
    console.log('item', this.item);

    const tempDeliver: Deliver = {
      id: 1,
      date: new Date(),
      colisIds: [1, 2, 3],
    };
    //this.item.set(tempDeliver);
  }
}
