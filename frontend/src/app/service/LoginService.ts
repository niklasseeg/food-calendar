import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService{
  constructor(private http: HttpClient) {
  }

  testLoginData(): Promise<string>{

    return new Promise((resolve, reject) => {
      this.http.get('/login')
        .toPromise()
        .then((returnValue: boolean) => {
          if (returnValue === true) {
            resolve('1');
          } else {
            reject('Fehler beim Login');
          }
        });
    });
  }
}
