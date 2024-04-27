import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template:`
  <div style="border: 8px solid red;">
  child component <br> {{parentData}}
  </div>
  `
})
export class ChildComponent {
  @Input() parentData:string;
}
