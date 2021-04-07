import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IEntity {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  api = environment.API_LINK;
  searchTerms = new Subject<string>();
  constructor(private http: HttpClient) {}

  fetchData(): Observable<IEntity[]> {
    return this.http.get<IEntity[]>(this.api);
  }
  fetchDataByTitle(title: string): Observable<IEntity[]> {
    return this.http.get<IEntity[]>(`${this.api}?title=${title}`);
  }
}
