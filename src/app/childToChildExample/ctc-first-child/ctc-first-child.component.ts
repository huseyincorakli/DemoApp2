import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ctc-first-child',
  template:`<div style="border: 8px solid blue;">
    first child <br>
    {{firstChildData}}
  </div>`
})
export class CtcFirstChildComponent implements OnInit {
  @Output() firstChildEvent:EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.firstChildEvent.emit(this.firstChildData);
  }
  firstChildData:string ="Bu bir first child component verisidir."
}
