import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  registerForm: FormGroup;

  constructor(private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      confirmPassword: new FormControl('', Validators.required),
    }, this.passwordMatchValidator);
  }

  register() {
    /* this.authService.resgister(this.model).subscribe(() => {
      this.alertify.success('Registration Success');

      this.registerForm.reset();
    }, error => {
      this.alertify.error(error);
    }); */
    console.log(this.registerForm.value);
  }

  cancel() {
    this.cancelRegister.emit();

    this.registerForm.reset();
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password').value === formGroup.get('confirmPassword').value ? null : { 'mismatch' : true };
  }
}
