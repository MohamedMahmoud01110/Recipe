import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-button',
  imports: [],
  templateUrl: './sidebar-button.component.html',
  styleUrl: './sidebar-button.component.css',
})
export class SidebarButtonComponent {
  @Output() isSidebarOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleSidebar() {
    this.isSidebarOpen.emit(true);
  }
}
