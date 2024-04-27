import { Component } from '@angular/core';

@Component({
  selector: 'app-ctc-parent',
  template:`
  <div style="border:  8px solid green;">
  ctc parent <br>
  <app-ctc-first-child (firstChildEvent)="getFirstChildData($event)"></app-ctc-first-child> 
  <app-ctc-second-child [firstChildDataInSecondChildComp]="_firstChildData"></app-ctc-second-child>
  </div>
  
  `
})
export class CtcParentComponent {
  _firstChildData:string;
  getFirstChildData(firstChildData:string){
    this._firstChildData=firstChildData;
  }
}
