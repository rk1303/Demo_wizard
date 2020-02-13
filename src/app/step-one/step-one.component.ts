import { Component } from '@angular/core';
import { MainService } from '../services/main-service.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneFormComponent {
  userDetails;
  constructor(private service: MainService) {
    this.userDetails = service.getUserDetail();

  }
}