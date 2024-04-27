import { Component } from '@angular/core';

@Component({
  selector: 'app-ctp-parent',
template:` 
<div style="border: 8px solid green;">
  ctp parent <br>
  {{_childData}}
  <app-ctp-child (childEvent)="getChildData($event)"></app-ctp-child>

</div>
`
})
export class CtpParentComponent {
_childData :string;
 getChildData(childData:string){
this._childData=childData;
 }
}
