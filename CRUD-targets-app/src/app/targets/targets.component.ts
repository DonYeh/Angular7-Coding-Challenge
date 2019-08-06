import { Component, OnInit } from "@angular/core";
import { TARGETS } from "../mock-company-data";
import { Target } from "../target";
@Component({
  selector: "app-targets",
  templateUrl: "./targets.component.html",
  styleUrls: ["./targets.component.scss"]
})
export class TargetsComponent implements OnInit {
  targets = TARGETS;
  selectedTarget: Target;
  onSelect(target: Target): void {
    this.selectedTarget = target;
  }

  constructor() {}

  ngOnInit() {}
}
