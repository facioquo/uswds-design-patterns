import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SiteBannerComponent } from "./components/site-banner/site-banner.component";
import { SiteIdentifierComponent } from "./components/site-identifier/site-identifier.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  imports: [RouterOutlet, SiteBannerComponent, SiteIdentifierComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  // TitleStrategy handles SEO meta; no extra init required here.
}
