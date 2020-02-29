import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Thing } from '../model/Thing';

@Injectable({
  providedIn: 'root'
})
export class ThingService {

  constructor(private httpClient: HttpClient) { }

  public getThings(): Promise<Thing[]> {
    return this.httpClient.get<Thing[]>('http://localhost:3000/').toPromise();
  }

  public editThing(thing: Thing) {
    return this.httpClient.put<Thing>('http://localhost:3000/', thing).toPromise();
  }

  public deleteThing(thing: Thing) {
    const id = thing.id;
    return this.httpClient.request('delete', 'http://localhost:3000/', {body: {id}}).toPromise();

  }

  public createThing(thing) {
   return this.httpClient.post<Thing>('http://localhost:3000/', thing).toPromise();
  }
}
