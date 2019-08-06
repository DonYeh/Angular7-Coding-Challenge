import { Injectable } from "@angular/core";
import { Target } from "./target";
import { TARGETS } from "./mock-company-data";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TargetService {
  constructor() {}

  getTargets(): Observable<Target[]> {
    return of(TARGETS);
  }
}
