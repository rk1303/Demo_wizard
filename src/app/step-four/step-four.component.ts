import { Component, OnInit, ViewChild } from '@angular/core';
// import { CaptchaComponent } from 'angular-captcha';

import { MainService } from '../services/main-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {

  userDetails;
  aFormGroup: FormGroup;
  constructor(private service: MainService, private formBuilder: FormBuilder) {
    this.userDetails = service.getUserDetail();
  }
  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  success(){
    this.service.setUserDetails('captcha', true);
  }
}