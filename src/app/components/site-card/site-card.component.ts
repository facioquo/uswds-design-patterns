import { Component, ChangeDetectionStrategy, input } from "@angular/core";
import { type Card } from "./card.model";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-site-card",
  templateUrl: "./site-card.component.html",
  styleUrls: ["./site-card.component.scss"],
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteCardComponent {
  card = input.required<Card>();
  i = input.required<number>();
}
