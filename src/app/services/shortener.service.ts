import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UrlResponse} from "../models/response/url-response.data";
import {UrlRequest} from "../models/request/url-request.data";
import {UserResponse} from "../models/response/user-response.data";

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  private baseUrl: string = 'http://localhost:8080/api/urls';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getAllUrls(): Observable<UrlResponse[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<UrlResponse[]>(this.baseUrl, { headers });
  }

  deleteUrl(id: number): Observable<void> {
    const headers = this.getAuthHeaders();
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { headers });
  }

  createUrl(urlRequest: UrlRequest): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post<UrlRequest>(this.baseUrl, urlRequest, { headers });
  }

  getUrlById(id: number): Observable<UserResponse> {
    const headers = this.getAuthHeaders();
    return this.http.get<UserResponse>(`${this.baseUrl}/${id}`, { headers });
  }
}
