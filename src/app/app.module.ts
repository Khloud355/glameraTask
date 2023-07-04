import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusinessFormComponent } from './components/business-form/business-form.component';
import { BusLeftSideComponent } from './components/bus-left-side/bus-left-side.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedTextComponent } from './shared/shared-text/shared-text.component';
import { SharedFormComponent } from './shared/shared-form/shared-form.component';
import { ChooseBusinesComponent } from './components/choose-busines/choose-busines.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SucessComponent } from './shared/sucess/sucess.component';

@NgModule({
  declarations: [
    BusinessFormComponent,
    AppComponent,
    BusLeftSideComponent,
    SharedTextComponent,
    SharedFormComponent,
    ChooseBusinesComponent,
    SucessComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModuleModule,
    NgSelectModule,
FormsModule


  ],
  exports: [BusinessFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
