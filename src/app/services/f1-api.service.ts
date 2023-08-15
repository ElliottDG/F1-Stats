import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1ApiService {

  constructor(
    private http: HttpClient 
  ) { }

  private readonly ENDPOINT: string = 'https://ergast.com/api/f1';

  /*
    Please start the path without a starting / and no .json
    e.g. get('current/belgium/results')
  */

  // should only need get, create operations incase of use of cache later on
    public get(path: string, options?: any) { 
      let url = `${this.ENDPOINT}/${path}`;
    return this.http.get(url, options); 
    } 
    public post(path: string, data: any, options?: any)  { 
      let url = `${this.ENDPOINT}/${path}.json`;
    return this.http.post(url, data, options); 
    } 
    public put(path: string, data: any, options?: any)  { 
      let url = `${this.ENDPOINT}/${path}.json`;
    return this.http.put(url, data, options); 
    } 
    public delete(path: string, options?: any)  { 
      let url = `${this.ENDPOINT}/${path}.json`;
    return this.http.delete(url, options); 
    } 

}
