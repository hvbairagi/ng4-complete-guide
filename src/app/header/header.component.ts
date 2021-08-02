import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() linkClicked = new EventEmitter<string>();

  clicked(link: string) {
    this.linkClicked.emit(link);
  }
}
