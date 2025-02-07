import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlackBgComponent } from './components/sidebar/black-bg/black-bg.component';
import { SidebarButtonComponent } from './components/sidebar/sidebar-button/sidebar-button.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent,
    SidebarButtonComponent,
    BlackBgComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSidebarOpen: boolean = false;
}
