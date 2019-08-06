import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Target } from "./target";
import { TARGETS } from "./mock-company-data";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class TargetService {
  constructor(private messageService: MessageService) {}

  getTargets(): Observable<Target[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("TargetService: fetched targets");
    return of(TARGETS);
  }
}
