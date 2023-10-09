import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(public http: HttpClient) { }

  getAllCats(items:number) {
    return this.http.get(`${environment.URL}/breeds?limit=${items}`);
  }

  getImageById(id:any) {
    return this.http.get(`${environment.URL}/images/${id}`);
  }
}
