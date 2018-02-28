import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { HomeComponent } from './home/home.component';
import { SahamService } from './saham.service';
import { SahammasterComponent } from './sahammaster/sahammaster.component';
import { SahamupComponent } from './sahamup/sahamup.component';
import { SahamdownComponent } from './sahamdown/sahamdown.component';
import { SahamreversalComponent } from './sahamreversal/sahamreversal.component';
import { SahamsessionComponent } from './sahamsession/sahamsession.component';
import { SahamrankingComponent } from './sahamranking/sahamranking.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SahammasterComponent,
    SahamupComponent,
    SahamdownComponent,    
    SahamreversalComponent, 
    SahamsessionComponent, SahamrankingComponent    
  ],
  imports: [    
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    HttpModule,   
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "master", component: SahammasterComponent},      
      {path: "bull", component: SahamupComponent},
      {path: "bear", component: SahamdownComponent},
      {path: "reversal", component: SahamreversalComponent},      
      {path: "session", component: SahamsessionComponent},
      {path: "ranking", component: SahamrankingComponent}
      
    ])
  ],
  providers: [SahamService],
  bootstrap: [AppComponent]
})

export class AppModule { }
