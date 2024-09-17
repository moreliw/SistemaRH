import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-positions',
  standalone: true,
  imports: [],
  templateUrl: './positions.component.html',
  styleUrl: './positions.component.scss',
})
export class PositionsComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
