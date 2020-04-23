import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WebRTCViewComponent } from './web-rtcview.component';
import {WebRTCViewRoutingModule} from './webrtcview-routing.module'
// import { PopoverPage } from '../about-popover/about-popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WebRTCViewRoutingModule
  ],
  declarations: [WebRTCViewComponent,],
//   entryComponents: [PopoverPage],
  bootstrap: [WebRTCViewComponent],
})
export class WebRTCViewModule {}
