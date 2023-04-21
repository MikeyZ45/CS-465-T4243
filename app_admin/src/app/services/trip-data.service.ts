import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`

  public addTrip(formData: Trip): Promise<Trip[]> {

    console.log('Inside TripDataService#addTrip');

    console.log(JSON.stringify(formData));

 

    const httpOptions = {

      headers: new HttpHeaders({

        'Content-Type':  'application/json'

      })

  };

 

 return this.http.post<Trip[]>(this.tripUrl, formData, httpOptions)

       .toPromise()

      // .then(response => response.json() as Trip[])

       .catch(this.handleError);

  }


  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      //.then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purpose only
    return Promise.reject(error.message || error);
  }
}
