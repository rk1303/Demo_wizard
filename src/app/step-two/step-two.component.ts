import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main-service.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent {

  userDetails;
  constructor(private service: MainService) {
    this.userDetails = service.getUserDetail();
  }

}
