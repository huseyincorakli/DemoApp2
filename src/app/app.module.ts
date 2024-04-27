import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParenChildCommunicationComponent } from './paren-child-communication/paren-child-communication.component';
import { ParentComponent } from './parentToChildExample/parent/parent.component';
import { ChildComponent } from './parentToChildExample/child/child.component';
import { CtpParentComponent } from './childToParentExample/ctp-parent/ctp-parent.component';
import { CtpChildComponent } from './childToParentExample/ctp-child/ctp-child.component';
import { CtcParentComponent } from './childToChildExample/ctc-parent/ctc-parent.component';
import { CtcFirstChildComponent } from './childToChildExample/ctc-first-child/ctc-first-child.component';
import { CtcSecondChildComponent } from './childToChildExample/ctc-second-child/ctc-second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParenChildCommunicationComponent,
    ParentComponent,
    ChildComponent,
    CtpParentComponent,
    CtpChildComponent,
    CtcParentComponent,
    CtcFirstChildComponent,
    CtcSecondChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
