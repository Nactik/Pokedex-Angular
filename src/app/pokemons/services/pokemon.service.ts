import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PokemonListComponent } from '../components/pokemon-list/pokemon-list.component';
import { PagedData } from '../models/paged-data.model';
import { Pokemon } from '../models/pokemon-model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  apiUrl:string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io";

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    const getUrl = `${this.apiUrl}/pokemons`;
    return this.http.get<PagedData<Pokemon>>(getUrl).pipe(
      catchError(this.handleError<PagedData<Pokemon>>('get Pokemon',undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
