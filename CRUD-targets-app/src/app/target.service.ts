import { Injectable } from "@angular/core";
import { Target } from "./target";
import { TARGETS } from "./mock-company-data";

@Injectable({
  providedIn: "root"
})
export class TargetService {
  constructor() {}

  getTargets(): Target[] {
    return TARGETS;
  }
}
