import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Colis } from '../../models/colis';
import { SaveNewOneColis } from '../../services/save-new-one-colis';

@Component({
  selector: 'app-add-new-one',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-one.html',
  styleUrl: './add-new-one.css',
})
export class AddNewOne {
  private readonly formBuilder = inject(FormBuilder);
  private readonly saveNewOneColis = inject(SaveNewOneColis);
  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    weight: [0.5, [Validators.required, Validators.min(0.1)]],
    destination: ['', [Validators.required, Validators.minLength(2)]],
  });
  protected hasSaved = false;

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.hasSaved = false;
      return;
    }

    const value = this.form.getRawValue();
    const colis: Colis = {
      id: Date.now(),
      name: value.name.trim(),
      weight: Number(value.weight),
      destination: value.destination.trim(),
    };

    this.saveNewOneColis.add(colis);
    this.hasSaved = true;
    this.form.reset({
      name: '',
      weight: 0.5,
      destination: '',
    });
  }
}
