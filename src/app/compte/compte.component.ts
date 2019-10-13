import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgControl, NgForm } from '@angular/forms';
import { Donnees }    from '../models/donnees';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit 
{
  ngOnInit() {

  }

      civilite = ['M','Mlle', 'Mme'];
      
    model = new Donnees(18, null, "EHRHARD", "Jonathan", "0388654851", "0665253265", "Mr-Jooo", "12345678", "10 rue de la cité", null, "67114" );

    submitted = false;

    onSubmit() { this.submitted = true; }


}
