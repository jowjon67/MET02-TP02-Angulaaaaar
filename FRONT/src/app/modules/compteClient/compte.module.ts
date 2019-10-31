import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompteComponent } from './compte/compte.component';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '', component: CompteComponent 
    }
  ];
  
@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,

      [RouterModule.forChild(routes)],
  
    ],
    providers:[],
    exports: [RouterModule],
  //ListeArticleComponent, DetailComponent
    declarations: [ CompteComponent]
  })
export class CompteModule { 

 
};




