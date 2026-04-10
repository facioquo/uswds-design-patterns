import { Component, ChangeDetectionStrategy, input, inject } from "@angular/core";
import { UtilityService } from "@services/utility.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-pattern-footer",
  templateUrl: "./pattern-footer.component.html",
  styleUrls: ["./pattern-footer.component.scss"],
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatternFooterComponent {
  readonly u = inject(UtilityService);

  githubFolder = input("");
}
