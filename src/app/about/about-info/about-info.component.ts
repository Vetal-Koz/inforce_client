import { Component } from '@angular/core';
import {AboutInfoService} from "../../services/about-info.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about-info',
  templateUrl: './about-info.component.html',
  styleUrl: './about-info.component.css'
})
export class AboutInfoComponent {
  roles = JSON.parse(localStorage.getItem('roles') || '[]');
  isAdmin = this.roles.includes('Admin');
  id: number = 1;
  aboutInfo: any;
  errorMessage: string = '';

  constructor(
    private aboutInfoService: AboutInfoService,
  ) { }

  ngOnInit(): void {
    if (this.id) {
      this.loadAboutInfo(this.id);
    }
  }

  loadAboutInfo(id: number): void {
    this.aboutInfoService.getAboutInfoById(id).subscribe({
      next: (data) => {
        this.aboutInfo = data;
      },
      error: () => {
        this.errorMessage = 'Failed to load About Info.';
      }
    });
  }
}
