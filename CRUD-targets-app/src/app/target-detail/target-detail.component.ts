import { Component, OnInit, Input } from "@angular/core";
import { Target } from "../target";

@Component({
  selector: "app-target-detail",
  templateUrl: "./target-detail.component.html",
  styleUrls: ["./target-detail.component.scss"]
})
export class TargetDetailComponent implements OnInit {
  @Input() target: Target;

  constructor() {}

  ngOnInit() {}
}
