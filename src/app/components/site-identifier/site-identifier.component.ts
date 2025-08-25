import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-site-identifier",
  templateUrl: "./site-identifier.component.html",
  styleUrls: ["./site-identifier.component.scss"],
  imports: [RouterLink, NgOptimizedImage],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteIdentifierComponent {}
