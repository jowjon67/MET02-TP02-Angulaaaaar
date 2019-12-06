import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  loginForm: FormGroup;
  submited = false;
  errors ="";

  login: any;
  password: any;

  constructor( 
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router,
) { }

  ngOnInit() {
  }
  connect() {
    console.log(this.login);
    console.log(this.password);
    
    this.authentificationService.login(this.login, this.password).subscribe(success => {
      localStorage.setItem('token', success.token);
      // succes.token
      // jwt into success 
      // this.localStorage.setItem('token') = success;
    });
  }

}
