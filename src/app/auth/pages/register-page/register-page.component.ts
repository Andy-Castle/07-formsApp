import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

// import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styles: [],
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatosService.firstNameAndLastnamePattern),
        ],
        [],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatosService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatosService.cantBeStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatosService.isFieldOneEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatosService: ValidatorsService,
    private emailValidator: EmailValidator
  ) {}

  isValidField(field: string) {
    // TODO: obtener validación desde un servicio
    return this.validatosService.isValidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
