import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private router: Router) {}

  toggle() {
    document.querySelector('#sidebar').classList.toggle('expand');
  }

  goTo(route: string, event: Event) {
    event.stopPropagation();
    this.router.navigate([route]);
  }
}
