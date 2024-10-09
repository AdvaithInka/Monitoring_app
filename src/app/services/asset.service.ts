import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private apiUrl = 'https://brsiwllvmb.execute-api.us-east-1.amazonaws.com/stage/GetAllAssetDetails';

  constructor(private http: HttpClient) {
    console.log('AssetService constructor called');
  }

  private getHeaders(): HttpHeaders {
    console.log('Creating headers for API request');
    return new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidmlkaW9fdGVzdCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImNsaWVudCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjJFQzUwNjBGLUNBRDQtNDRBNS05QzcwLTYzN0E2RjhFMzk1NyIsImp0aSI6IjliMDUwNmM5LTYxMTctNDgwNy1iZGUxLWI3ZGE2ZWRhNTlmMCIsImlhdCI6MTcyODM4NDIwNSwibmJmIjoxNzI4Mzg0MjA1LCJleHAiOjE3MjgzODQ4MDUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcyMDQvIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzIwNC8ifQ.SqtVqajNp7ALvn2XbOrozBjuQqnEGsOEQs30R2-0vt8'
    });
  }

  getAllAssets(): Observable<any> {
    console.log('getAllAssets function called');
    return this.http.get<any>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(
        tap(
          response => console.log('API response received for getAllAssets', response),
          error => console.error('Error in getAllAssets API call', error)
        )
      );
  }

  searchAssets(searchParams: any): Observable<any[]> {
    console.log('searchAssets function called with params:', searchParams);
    let params = new HttpParams();
    Object.keys(searchParams).forEach(key => {
      if (searchParams[key]) {
        params = params.append(key, searchParams[key]);
      }
    });

    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders(), params })
      .pipe(
        tap(
          response => console.log('API response received for searchAssets', response),
          error => console.error('Error in searchAssets API call', error)
        )
      );
  }
}