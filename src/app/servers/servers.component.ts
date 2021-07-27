import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  [x: string]: any;
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  passwordVisibility = false;
  logs = [];
  count = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUsername() {
    if (this.username !== '') return false;
  }

  onToggle() {
    this.passwordVisibility = !this.passwordVisibility;
    this.logs.push(this.count);
    this.count++;
  }
}
