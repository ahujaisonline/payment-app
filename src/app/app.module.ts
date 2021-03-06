import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaseComponent } from './app/components/base/base.component';
import { CardFormComponent } from './app/components/card-form/card-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NetBankingComponent } from './app/components/net-banking/net-banking.component';
import { InputRestrictDirective } from './app/directives/input-restrict.directive';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    CardFormComponent,
    NetBankingComponent,
    InputRestrictDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
