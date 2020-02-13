import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main-service.service';
@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent {

  userDetails;
  constructor(private service: MainService) {
    this.userDetails = service.getUserDetail();

  }
  
}
