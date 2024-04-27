import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ctp-child',
 template:`
 <div style="border: 8px solid orange;">
 ctp-child
 </div>
 `
})
export class CtpChildComponent implements OnInit {
  childData:string="Bu bir child component verisidir."
  ngOnInit(): void {
    this.childEvent.emit(this.childData)
  }

  @Output() childEvent:EventEmitter<any> = new EventEmitter();
}
