import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
// import {Socket} from "./../providers/soket";

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @Input() colors: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // let connection = new RTCMultiConnection();
  }

  gotoWebRTC() {
    this.router.navigate(['/webrtcview']);
  }

  linkNewVideo() {
    // this.socket.newVideo(123);
  }

  viewVideo() {
    // this.socket.viewVideo(123);
  }

  listen(){
    // this.socket.listen(123);
  }

}
