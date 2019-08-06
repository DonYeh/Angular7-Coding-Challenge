import { Component, OnInit } from "@angular/core";
// import { TARGETS } from "../mock-company-data";
import { Target } from "../target";

import { TargetService } from "../target.service";
@Component({
  selector: "app-targets",
  templateUrl: "./targets.component.html",
  styleUrls: ["./targets.component.scss"]
})
export class TargetsComponent implements OnInit {
  targets: Target[];

  constructor(private targetService: TargetService) {}

  ngOnInit() {
    this.getTargets();
  }

  // onSelect(target: Target): void {
  //   this.selectedTarget = target;
  // }

  getTargets(): void {
    this.targetService
      .getTargets()
      .subscribe(targets => (this.targets = targets));
  }
}
