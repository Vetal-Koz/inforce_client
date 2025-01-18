import { Component } from '@angular/core';
import {UrlResponse} from "../../models/response/url-response.data";
import {ShortenerService} from "../../services/shortener.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-urls-table',
  templateUrl: './urls-table.component.html',
  styleUrl: './urls-table.component.css'
})
export class UrlsTableComponent {
  roles = JSON.parse(localStorage.getItem('roles') || '[]');
  isAdmin = this.roles.includes('Admin');
  urlsList: UrlResponse[] = [];
  constructor(private shortenerService: ShortenerService) {}

  ngOnInit(): void {
    this.fetchUrls();
  }

  fetchUrls(): void {
    this.shortenerService.getAllUrls().subscribe(
      (data: UrlResponse[]) => {
        this.urlsList = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching URLs:', error);
      }
    );
  }

  protected readonly localStorage = localStorage;
}
