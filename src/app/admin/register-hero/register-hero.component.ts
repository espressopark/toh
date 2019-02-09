import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-hero',
  templateUrl: './register-hero.component.html',
  styleUrls: ['./register-hero.component.scss']
})
export class RegisterHeroComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      sex: [null, Validators.required],
      country: [null, Validators.required],
      address: null
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.form);
    if (!this.form.valid) {
      // 모든 invalid 필드를 표시
      // to validate all form fields
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.controls[key];
        control.markAsTouched({onlySelf: true});
      });
      return;
    }

    // 서버연동하여 등록
  }
}
