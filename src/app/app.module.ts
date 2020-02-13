import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { StepOneFormComponent } from './step-one/step-one.component';
import { WizardComponent } from './wizard/wizard.component';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';

import { MainService } from './services/main-service.service';

@NgModule({
  declarations: [
    AppComponent,
    StepOneFormComponent,
    WizardComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
