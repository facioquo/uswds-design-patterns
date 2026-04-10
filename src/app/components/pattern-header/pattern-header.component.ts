import { Component, ChangeDetectionStrategy, input, inject } from "@angular/core";
import { UtilityService } from "@services/utility.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-pattern-header",
  templateUrl: "./pattern-header.component.html",
  styleUrls: ["./pattern-header.component.scss"],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatternHeaderComponent {
  readonly u = inject(UtilityService);

  patternName = input("");
}
