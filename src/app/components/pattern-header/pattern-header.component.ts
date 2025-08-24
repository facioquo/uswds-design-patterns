import { Component, Input, inject } from "@angular/core";
import { UtilityService } from "src/app/services/utility.service";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-pattern-header",
    templateUrl: "./pattern-header.component.html",
    styleUrls: ["./pattern-header.component.scss"],
    imports: [RouterLink]
})
export class PatternHeaderComponent {
  readonly u = inject(UtilityService);

  @Input() patternName = "";
}
