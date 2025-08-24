import { Component, inject } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-404",
  templateUrl: "./404.component.html",
  styleUrls: ["./404.component.scss"],
  imports: [RouterLink],
})
export class PageNotFoundComponent {
  private readonly meta = inject(Meta);

  constructor() {
    // ensure 404 is not indexed
    const selector = "name='robots'";
    if (this.meta.getTag(selector)) {
      this.meta.updateTag({ name: "robots", content: "noindex, nofollow" }, selector);
    } else {
      this.meta.addTag({ name: "robots", content: "noindex, nofollow" });
    }
  }
}
