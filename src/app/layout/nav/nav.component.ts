import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return localStorage.getItem('email') != null;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/urls']);
  }

  protected readonly localStorage = localStorage;
}
