import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  user_organization:string="Sny";
  user_phone:number=43245234;
  constructor() { }

  ngOnInit() {
  }

}
