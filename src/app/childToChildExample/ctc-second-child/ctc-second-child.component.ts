import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ctc-second-child',
  template:`
  <div style="border: 8px solid red;">
  second child <br>
  <p style="color:red">{{firstChildDataInSecondChildComp}}</p>
  </div>
  `
})
export class CtcSecondChildComponent {
  @Input() firstChildDataInSecondChildComp:string;
}
