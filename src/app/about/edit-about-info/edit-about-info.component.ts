import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AboutInfoService} from "../../services/about-info.service";

@Component({
  selector: 'app-edit-about-info',
  templateUrl: './edit-about-info.component.html',
  styleUrl: './edit-about-info.component.css'
})
export class EditAboutInfoComponent {
  id: number = 1;
  aboutInfo: any = { content: '' };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private aboutInfoService: AboutInfoService,
    private router: Router
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

  saveChanges(): void {
    this.aboutInfoService.updateAboutInfo(this.id, this.aboutInfo).subscribe({
      next: () => {
        this.successMessage = 'About Info updated successfully.';
        setTimeout(() => this.router.navigate(['/about-info']), 2000);
      },
      error: () => {
        this.errorMessage = 'Failed to update About Info.';
      }
    });
  }
}
