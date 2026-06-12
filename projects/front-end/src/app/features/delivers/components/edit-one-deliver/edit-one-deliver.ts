import { Component, computed, effect, input, linkedSignal, OnChanges, signal, SimpleChanges } from '@angular/core';
import { Deliver } from '../../models/deliver';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-edit-one-deliver',
  imports: [],
  templateUrl: './edit-one-deliver.html',
  styleUrl: './edit-one-deliver.css',
})
export class EditOneDeliver {
  item = input.required<Deliver>();
  //protected readonly toEditTemp = signal<Deliver | null>(null);
  // C'est la bonne solution pour récupérer les changements de l'input N°02
  //protected readonly toEditTemp = computed(() => signal(this.item()));
   // C'est la bonne solution pour récupérer les changements de l'input N°03
  protected readonly toEditTemp = linkedSignal(this.item);

  protected readonly deliverForm = form(this.toEditTemp);

  // INTERDIT ;)
  // toPrepareEffect = effect(() => {
  //   const item = this.item();
  //   this.toEditTemp.set(item);
  // });

  ngOnInit(): void {
    console.log('item', this.item);

    const tempDeliver: Deliver = {
      id: 1,
      date: new Date(),
      colisIds: [1, 2, 3],
    };
    this.toEditTemp.set(tempDeliver);
    //this.item.set(tempDeliver);
  }

  // C'est la bonne solution pour récupérer les changements de l'input N°01
  ngOnChanges(changes: SimpleChanges): void {
    // const item = this.item();
    // this.toEditTemp.set(item);
  }
  
}
