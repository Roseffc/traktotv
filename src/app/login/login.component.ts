import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraktoService } from '../services/trakto.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private traktoService: TraktoService,
    private formBuider: FormBuilder
  ) {}

  ngOnInit() {
    this.setFormGroup();
  }

  setFormGroup() {
    this.formLogin = this.formBuider.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    })
  }

  login(){
    const dados=this.formLogin.value;
    this.traktoService.login(dados)
  }




}
