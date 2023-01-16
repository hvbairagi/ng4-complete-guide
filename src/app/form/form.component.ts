import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() value: string;
  @Output() eventProp = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log('value: ', this.value);
  }

  clickHandler() {
    this.eventProp.emit('Event Emitted');
  }
}
