import { inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { TitleStrategy, type RouterStateSnapshot } from "@angular/router";
import { SITE_TITLE, SITE_DESCRIPTION, SOCIAL_IMAGE_PATH } from "./site.constants";

interface PageMeta {
  description?: string;
  image?: string;
}

@Injectable({ providedIn: "root" })
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    // Title
    const fromRoute = this.buildTitle(snapshot);
    const finalTitle = this.composeTitle(fromRoute ?? "");
    this.title.setTitle(finalTitle);

    // Meta (description, image)
    const deepest = this.hasRoot(snapshot) ? this.getDeepestRoute(snapshot.root) : undefined;
    const meta = (deepest?.data?.["meta"] as PageMeta | undefined) ?? {};
    const description =
      meta.description ??
      (deepest?.data?.["description"] as string | undefined) ??
      SITE_DESCRIPTION;
    const imageRaw =
      meta.image ?? (deepest?.data?.["image"] as string | undefined) ?? SOCIAL_IMAGE_PATH;
    const origin = typeof location !== "undefined" && location.origin ? location.origin : "";
    const image = imageRaw.startsWith("http") ? imageRaw : `${origin}${imageRaw}`;

    this.upsert({ name: "description", content: description });
    this.upsert({ property: "og:description", content: description });
    this.upsert({ property: "og:title", content: finalTitle });
    this.upsert({ name: "image", content: image });
    this.upsert({ property: "og:image", content: image });
  }

  private composeTitle(routeTitle: string): string {
    // Avoid double suffix if routeTitle already equals the site title
    if (!routeTitle) {
      return SITE_TITLE;
    }
    if (routeTitle === SITE_TITLE) {
      return routeTitle;
    }
    return `${routeTitle} | ${SITE_TITLE}`;
  }

  private getDeepestRoute(
    route: import("@angular/router").ActivatedRouteSnapshot
  ): import("@angular/router").ActivatedRouteSnapshot {
    let r = route;
    while (r.firstChild) {
      r = r.firstChild;
    }
    return r;
  }

  private hasRoot(
    snapshot: import("@angular/router").RouterStateSnapshot | undefined
  ): snapshot is import("@angular/router").RouterStateSnapshot & {
    root: import("@angular/router").ActivatedRouteSnapshot;
  } {
    return !!snapshot && !!(snapshot as unknown as { root?: unknown }).root;
  }

  private upsert(tag: { name?: string; property?: string; content: string }): void {
    const selector = tag.name ? `name='${tag.name}'` : `property='${tag.property}'`;
    const existing = this.meta.getTag(selector);
    if (existing) {
      this.meta.updateTag(tag, selector);
    } else {
      this.meta.addTag(tag);
    }
  }
}
