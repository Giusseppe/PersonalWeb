import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UdemyService {

  private urlEndPoint= 'https://www.udemy.com/api-2.0/courses';
  private urlEndPoint2= 'https://yupee.udemy.com/api-2.0/organizations/yupee/courses/list';

  idCliente = 'YlNYeZSAHDdaI9CthafDuMBNqK692RDhQRt63ANK';
  claveSecreta = '6ZynIYiI4jRXSueENBUQF6ihYBusj79QwVJbeEray2ByPgVMLodtkwL4o1OjCEyRKvvDlf216Ss9CdYAaVjlIeXBHuOXIfHZBKOjeT7N6AWuyGQlD7UC57isV9tAe7tb';
  autorization = 'Basic '+btoa(this.idCliente+':'+this.claveSecreta);


  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]>{

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': this.autorization,
        'Accept': 'application/json, text/plain, */*',
        'Access-Control-Allow-Methods' : 'GET,OPTIONS'
      })
    };
    // console.log('auth :'+this.autorization);
    // console.log('httpOptions :'+httpOptions);
    return this.http.get<any[]>(this.urlEndPoint,httpOptions);
  }
}
