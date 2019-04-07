import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ISkyObject } from './SkyObjects';
import { ISkyPath } from './SkyPath';
import { ISkyPath2 } from './SkyPaths2';
@Injectable({
    providedIn: 'root'
})
export class SkyObjectService {
    //private ProductUrl = 'assets/products.json';
    private SkyObjectUrl = 'assets/SkyObjects.json';
    private SkyPathUrl = 'assets/SkyPaths.json'
    private SkyPath2Url = 'assets/SkyPaths2.json'

    constructor(private http: HttpClient) { }

    getSkyObjects(): Observable<ISkyObject[]> {
        return this.http.get<ISkyObject[]>(this.SkyObjectUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))), 
            catchError(this.handleError));
    }

    getSkyPaths(): Observable<ISkyPath[]> {
        return this.http.get<ISkyPath[]>(this.SkyPathUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))), 
            catchError(this.handleError));
    }

    getSkyPaths2(): Observable<ISkyPath2[]> {
        return this.http.get<ISkyPath2[]>(this.SkyPath2Url).pipe(
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


