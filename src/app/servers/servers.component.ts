import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',     //  <-- by element
  //selector: '[app-servers]', //  <-- by attribute
  //selector: '.app-servers',  //  <-- by class      by id not allow
  template: `<app-server></app-server>
             <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
