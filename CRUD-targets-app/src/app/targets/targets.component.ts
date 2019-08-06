import { Component, OnInit } from "@angular/core";
import { TARGETS } from "../mock-company-data";
@Component({
  selector: "app-targets",
  templateUrl: "./targets.component.html",
  styleUrls: ["./targets.component.scss"]
})
export class TargetsComponent implements OnInit {
  targets = TARGETS;

  constructor() {}

  ngOnInit() {}
}
