import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-rtcview',
  templateUrl: './web-rtcview.component.html',
  styleUrls: ['./web-rtcview.component.scss'],
})
export class WebRTCViewComponent implements OnInit {

  private items = [
    {src: './../../../assets/img/user1.png', text: 'user1'},
    {src: './../../../assets/img/user1.png', text: 'user2'},
    {src: './../../../assets/img/user1.png', text: 'user3'},
    {src: './../../../assets/img/user1.png', text: 'user4'}
  ]
  constructor() { }

  ngOnInit() {}

}
