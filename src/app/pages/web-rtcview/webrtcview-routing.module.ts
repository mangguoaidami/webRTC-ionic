import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebRTCViewComponent } from './web-rtcview.component';

const routes: Routes = [
  {
    path: '',
    component: WebRTCViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRTCViewRoutingModule { }
