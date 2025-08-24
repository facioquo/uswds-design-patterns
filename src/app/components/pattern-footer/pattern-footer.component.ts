import { Component, Input, inject } from "@angular/core";
import { UtilityService } from "src/app/services/utility.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-pattern-footer",
  templateUrl: "./pattern-footer.component.html",
  styleUrls: ["./pattern-footer.component.scss"],
  imports: [RouterLink],
})
export class PatternFooterComponent {
  readonly u = inject(UtilityService);

  @Input() githubFolder = "";
}
