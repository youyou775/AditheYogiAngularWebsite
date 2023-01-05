import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  // Define API
  apiURL = 'http://aditheyogi.rf.gd/api/';

  constructor(private http: HttpClient) { }

  postRetreat(emplyee: any) {
    return this.http.post(this.apiURL + 'retreat', { data: emplyee }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
