import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-black-bg',
  imports: [],
  templateUrl: './black-bg.component.html',
  styleUrl: './black-bg.component.css',
})
export class BlackBgComponent {
  @Output() isSidebarOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleSidebar() {
    this.isSidebarOpen.emit(false);
  }
}
