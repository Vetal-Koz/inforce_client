import { Component } from '@angular/core';
import {ShortenerService} from "../../services/shortener.service";
import {UrlRequest} from "../../models/request/url-request.data";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-url',
  templateUrl: './add-url.component.html',
  styleUrl: './add-url.component.css'
})
export class AddUrlComponent {
  originalUrl: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private shortenerService: ShortenerService,
              private router: Router
  ) { }

  addUrl(): void {
    if (this.originalUrl) {
      const urlRequest: UrlRequest = {
        originalUrl: this.originalUrl
      };

      this.shortenerService.createUrl(urlRequest).subscribe({
        next: (response) => {

          this.successMessage = 'URL added!';
          this.errorMessage = '';
          this.originalUrl = '';
          this.router.navigate(['/urls'])
        },
        error: (error) => {
          this.errorMessage = 'Error creating URL: ' + error.message;
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Please, enter URL!';
    }
  }
}
