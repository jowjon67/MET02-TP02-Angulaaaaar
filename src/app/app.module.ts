import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { CompteComponent } from './compte/compte.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { FormsModule} from '@angular/forms';
import { PhoneNumberPipe } from './phone-numbre.pipe';
import { ErrorDirective } from './error.directive';
import { HttpClientModule } from '@angular/common/http';


import { PanierComponent } from './modules/panier/panier.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';


import { PanierState } from 'shared/states/panier-state';


const appRoutes: Routes = [
  { path: 'formulaire', component: CompteComponent },
  { path: 'catalogue', 
    loadChildren: () => import('./modules/catalogue/catalogue.module').then(m => m.CatalogueModule) 
  },
  { path: 'panier', component: PanierComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    CompteComponent,
    RecapitulatifComponent,
    PhoneNumberPipe,
    ErrorDirective,
    PanierComponent
  ],
  imports: [
    NgxsModule.forRoot([
      PanierState
    ]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
