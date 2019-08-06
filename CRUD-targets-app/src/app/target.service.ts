import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Target } from "./target";
import { TARGETS } from "./mock-company-data";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TargetService {
  private targetsUrl = "api/targets"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // getTargets(): Observable<Target[]> {
  //   // TODO: send the message _after_ fetching the heroes
  //   this.messageService.add(`TargetService: fetched target companies`);
  //   return of(TARGETS);
  // }

  // gets targets from the server
  getTargets(): Observable<Target[]> {
    return this.http.get<Target[]>(this.targetsUrl).pipe(
      tap(_ => this.log("fetched targets")),
      catchError(this.handleError<Target[]>("getTargets", []))
    );
  }

  getTarget(id: number): Observable<Target> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`TargetService: fetched target company ${id}`);
    return of(TARGETS.find(target => target.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TargetService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * param operation - name of the operation that failed
   * param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
