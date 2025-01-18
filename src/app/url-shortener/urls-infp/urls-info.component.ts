import {Component, OnInit} from '@angular/core';
import {ShortenerService} from "../../services/shortener.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-urls-infp',
  templateUrl: './urls-info.component.html',
  styleUrl: './urls-info.component.css'
})
export class UrlsInfoComponent implements OnInit{
  urlDetails: any;
  errorMessage: string = '';

  constructor(
    private shortenerService: ShortenerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadUrlInfo(id);
    }
  }

  loadUrlInfo(id: number): void {
    this.shortenerService.getUrlById(id).subscribe({
      next: (data) => {
        this.urlDetails = data;
        console.log(this.urlDetails);
      },
      error: (error) => {
        this.errorMessage = 'Can not get info about url ';
      }
    });
  }
}
