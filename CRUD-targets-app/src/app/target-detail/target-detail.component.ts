import { Component, OnInit, Input } from "@angular/core";
import { Target } from "../target";

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { TargetService } from "../target.service";

@Component({
  selector: "app-target-detail",
  templateUrl: "./target-detail.component.html",
  styleUrls: ["./target-detail.component.scss"]
})
export class TargetDetailComponent implements OnInit {
  @Input() target: Target;

  constructor(
    private route: ActivatedRoute,
    private targetService: TargetService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTarget();
  }

  getTarget(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.targetService
      .getTarget(id)
      .subscribe(target => (this.target = target));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.targetService.updateTarget(this.target).subscribe(() => this.goBack());
  }
}
