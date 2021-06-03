import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendvalueComponent } from './sendvalue/sendvalue.component';
import { DisplayvalueComponent } from './displayvalue/displayvalue.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SendvalueComponent,
    DisplayvalueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [SendvalueComponent]
})
export class AppModule { }
