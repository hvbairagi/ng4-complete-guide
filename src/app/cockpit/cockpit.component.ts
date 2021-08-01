import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  @Output('startTimer') startTimerEvent = new EventEmitter<number>();
  @Output('setTimer') setTimerEvent = new EventEmitter<number>();

  public time: number = 0;
  public interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
      this.startTimerEvent.emit(this.time);
    }, 1000);
  }

  setTimer() {
    this.time = 0;
    clearInterval(this.interval);
    this.setTimerEvent.emit(this.time);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.setTimerEvent.emit(this.time);
  }
}
