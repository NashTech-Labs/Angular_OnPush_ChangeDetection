import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardOnpushChangeDetectComponent } from './card-onpush-change-detect/card-onpush-change-detect.component';
import { CardDefaultChangeDetectComponent } from './card-default-change-detect/card-default-change-detect.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOnpushChangeDetectComponent,
    CardDefaultChangeDetectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
