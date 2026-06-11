import { Component, inject } from '@angular/core';
import { Colis } from '../../models/colis';
import { SaveNewOneColis } from '../../services/save-new-one-colis';

@Component({
  selector: 'app-add-new-one',
  imports: [],
  templateUrl: './add-new-one.html',
  styleUrl: './add-new-one.css',
})
export class AddNewOne {
  private readonly saveNewOneColis = inject(SaveNewOneColis);

  save() {
    const colis: Colis = {
      id: 1,
      name: 'Colis de test',
      weight: 2.5,
      destination: 'Paris',
    };
    this.saveNewOneColis.add(colis);
  } 
}
