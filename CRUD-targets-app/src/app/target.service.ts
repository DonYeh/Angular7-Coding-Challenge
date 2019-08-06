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
      tap(_ => this.log("fetched all targets")),
      catchError(this.handleError<Target[]>("getTargets", []))
    );
  }

  getTarget(id: number): Observable<Target> {
    const url = `${this.targetsUrl}/${id}`;
    return this.http.get<Target>(url).pipe(
      tap(_ => this.log(`fetched target id=${id}`)),
      catchError(this.handleError<Target>(`getTarget id=${id}`))
    );
  }

  /** POST: add a new hero to the server */
  addTarget(target: Target): Observable<Target> {
    return this.http
      .post<Target>(this.targetsUrl, target, this.httpOptions)
      .pipe(
        tap((newTarget: Target) =>
          this.log(`added target company w/ id=${newTarget.id}`)
        ),
        catchError(this.handleError<Target>("addTarget"))
      );
  }

  // updates the target on the "server"
  updateTarget(target: Target): Observable<any> {
    return this.http.put(this.targetsUrl, target, this.httpOptions).pipe(
      tap(_ => this.log(`updated target id=${target.id}`)),
      catchError(this.handleError<any>("updateTarget"))
    );
  }

  deleteTarget(target: Target | number): Observable<Target> {
    const id = typeof target === "number" ? target : target.id;
    const url = `{this.targetsUrl}/${id}`;
    return this.http.delete<Target>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted target company id:${id}`)),
      catchError(this.handleError<Target>("deleteTarget"))
    );
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
