import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  body: any;

  BASE_URL: string = 'http://localhost:3000';

  constructor( private http: Http ) { }

  getEntries() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }

  createEntry() {
    return this.http.post(`${this.BASE_URL}/api/journal-entries`, this.body)
  }

  getEntry(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }


}
