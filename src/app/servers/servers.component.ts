import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',     //  <-- by element
  //selector: '[app-servers]', //  <-- by attribute
  //selector: '.app-servers',  //  <-- by class      by id not allow
 /* template: `<app-server></app-server>
             <app-server></app-server>`,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = "Server was not created yet.";
  serverName="testServer";
  constructor() { 
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus="Server was created! Server name is "+this.serverName;
  }

  onUpdateServerName(event: Event){
      this.serverName= (<HTMLInputElement>event.target).value;
  }
}
