import { Component, OnInit } from "@angular/core";
import { Target } from "../target";
import { TargetService } from "../target.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  targets: Target[] = [];

  constructor(private targetService: TargetService) {}

  ngOnInit() {
    this.getTargets();
  }

  getTargets(): void {
    this.targetService
      .getTargets()
      .subscribe(targets => (this.targets = targets.slice(0, 4)));
  }
}
