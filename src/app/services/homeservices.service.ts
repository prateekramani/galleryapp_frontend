import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeservicesService {

  constructor(private http: HttpClient) { }

  username = ""

  setUsername(username : string)
  {
    this.username = username || "admin"
  }

  getImages() : any {
    return this.http.get(environment.baseApiUrl + 'image')
  }

  getActivity() : any {
    let  params = {username : this.username}
    return this.http.get(environment.baseApiUrl + 'activity', {params})
  }

  postActivity(item : any): any{
    return this.http.post(environment.baseApiUrl + 'activity',item)
  }

}
