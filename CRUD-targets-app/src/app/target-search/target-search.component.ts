import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Target } from "../target";
import { TargetService } from "../target.service";

@Component({
  selector: "app-target-search",
  templateUrl: "./target-search.component.html",
  styleUrls: ["./target-search.component.css"]
})
export class TargetSearchComponent implements OnInit {
  targets$: Observable<Target[]>;
  private searchTerms = new Subject<string>();

  constructor(private targetService: TargetService) {}

  // Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.targets$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new twem if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.targetService.searchTargets(term))
    );
  }
}
