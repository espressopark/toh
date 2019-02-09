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
      name: [null, Validators.required],
      email: null,
      sex: null,
      country: null,
      address: null
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.form);
    if (!this.form.valid) {
      // 모든 invalid 필드를 표시
      return;
    }

    // 서버연동하여 등록
  }
}
