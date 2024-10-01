import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrl: './collaborators.component.scss',
})
export class CollaboratorsComponent {
  constructor(private router: Router) {}

  newCollaborator() {
    this.router.navigate(['collaborators/new']);
  }

  editCollaborator(id: number) {
    this.router.navigate(['collaborators/edit/' + id]);
  }
}
