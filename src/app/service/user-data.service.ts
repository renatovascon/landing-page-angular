import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  protected http_headers = new HttpHeaders();
  public resposta: any

  constructor(private http :  HttpClient) {
    this.http_headers.set('Accept','application/json');

  }

  sendEmail(payload: any) {
    console.log(payload)
    axios.post('http://localhost:3000/tasks', payload)
    .then(response => {
      // lidar com sucesso
      this.resposta = response.data;
      console.log(this.resposta);
    })
    .catch(error => {
      // lidar com erro
      console.error('Houve um problema ao enviar dados para a API: ', error);
    });
    // return this.http.post<any>(`http://localhost:3000/tasks`, payload, {headers: this.http_headers});
  }
}
