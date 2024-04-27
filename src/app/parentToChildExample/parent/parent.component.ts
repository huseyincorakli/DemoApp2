import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
  <div style="border: 8px solid blue;">
  parent component <br>
  <app-child [parentData]="dataParent"></app-child>
  </div>
  `
})
export class ParentComponent {
 dataParent :string ="Bu bir parent component verisidir"
}
