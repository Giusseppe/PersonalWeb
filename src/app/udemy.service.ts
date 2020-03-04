import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UdemyService {

  private urlEndPoint= 'https://www.udemy.com/api-2.0/courses/';

  idCliente = 'YlNYeZSAHDdaI9CthafDuMBNqK692RDhQRt63ANK';
  claveSecreta = '6ZynIYiI4jRXSueENBUQF6ihYBusj79QwVJbeEray2ByPgVMLodtkwL4o1OjCEyRKvvDlf216Ss9CdYAaVjlIeXBHuOXIfHZBKOjeT7N6AWuyGQlD7UC57isV9tAe7tb';
  autorization:string ='';

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]>{
    this.autorization = 'Basic '+btoa(this.idCliente+':'+this.claveSecreta);

  const httpHeader = new HttpHeaders({
    "Accept": "application/json, text/plain, */*",
    "Authorization": this.autorization,
    "Content-Type": "application/json;charset=utf-8"
  });
    console.log(httpHeader);
    return this.http.get<any[]>(this.urlEndPoint,{headers: httpHeader});
  }
}
