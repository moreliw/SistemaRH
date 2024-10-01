import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  visibility = true;
  constructor(private router: Router) {}
  ngOnInit(): void {
    console.log(this.visibility);
  }

  goToPosition() {
    this.router.navigate(['/positions']);
  }

  changeVisibility() {
    this.visibility = !this.visibility;
  }
}
