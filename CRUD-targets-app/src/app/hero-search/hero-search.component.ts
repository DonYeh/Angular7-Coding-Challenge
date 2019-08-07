import { Component, OnInit } from "@angular/core";

import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import { Target } from "../target";
import { TargetService } from "../target.service";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.scss"]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Target[]>;
  private searchTerms = new Subject<string>();

  constructor(private targetService: TargetService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.targetService.searchTargets(term))
    );
  }
}
