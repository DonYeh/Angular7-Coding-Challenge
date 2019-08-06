import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Target } from "./target";
import { TARGETS } from "./mock-company-data";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
    return this.http.get<Target[]>(this.targetsUrl);
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
}
