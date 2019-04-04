import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ISkyObject } from './SkyObjects';
@Injectable({
    providedIn: 'root'
})
export class SkyObjectService {
    //private ProductUrl = 'assets/products.json';
    private SkyObjectUrl = 'assets/SkyObjects.json';

    constructor(private http: HttpClient) { }

    getSkyObjects(): Observable<ISkyObject[]> {
        return this.http.get<ISkyObject[]>(this.SkyObjectUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))), 
            catchError(this.handleError));
    }
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'An error occured: ${err.error.message}';
        }
        else {
            errorMessage = 'Server returned code: ${err.status}, error message is ${err.message}';
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}


