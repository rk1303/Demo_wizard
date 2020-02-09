import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  crStep: number = 1;
  isNextDisabled:boolean=false;
  isSubmitDisabled:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  back(){
    this.crStep =this.crStep - 1;
  }
  next(){
    this.crStep =this.crStep +1;
  }
  submit(): void{
  }

}
