import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent {
  // Este es una forma de hacer formularios o los campos
  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', []),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  //Esta es otra forma
  public myForm: FormGroup = this.fb.group({
    // El Validators es para hacer validaciones
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  onSave(): void {
    if (this.myForm.invalid) return;

    console.log(this.myForm.value);
  }
}
