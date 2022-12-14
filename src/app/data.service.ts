import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private http:HttpClient) { }
  async getData(){
    return lastValueFrom(this.http.get('assets/json/data.json'));
  }
}
