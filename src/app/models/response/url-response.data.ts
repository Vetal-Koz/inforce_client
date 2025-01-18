import {UserResponse} from './user-response.data';

export interface UrlResponse {
  id: number,
  originalUrl: string,
  shortenedUrl: string,
  createdAt: Date,
  createdBy: UserResponse,
}
