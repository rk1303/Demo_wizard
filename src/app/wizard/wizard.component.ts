import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main-service.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  // providers: [MainService]
})
export class WizardComponent {
  userDetails;
  crStep: number = 1;

  constructor(private service: MainService) {
    this.userDetails = service.getUserDetail();

  }
  back() {
    this.crStep = this.crStep - 1;
  }
  next(): void {
    const cr = this.crStep;
    const detail = this.userDetails;
    if (cr === 1 && detail.name.length === 0 && detail.email.length === 0) {
      alert("Both Name and email is required field!!");
    }
    else if (cr === 2 && detail.msg.length === 0) {
      alert("Message is required field and must have 10 to 40 character!!");
    }
    else if (cr === 3 && detail.org.length === 0 && detail.phone.length === 0) {
      alert("Both Organisation and Phone is required field!!");
    }
    else {
      this.crStep = this.crStep + 1;
    }
  }
  submit(): void {
    const cr = this.crStep;
    const detail = this.userDetails;
    if (cr === 4 && !detail.captcha) {
      alert("Please check the captcha!!");
    } else {
      this.service.addUser(this.userDetails).subscribe(
        (res) => {
        alert('User Added Successfully');
      });
    }
  }
}