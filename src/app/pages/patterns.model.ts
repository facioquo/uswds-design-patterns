import { type Card } from "@components/site-card/card.model";
export { Card } from "@components/site-card/card.model";

// DESIGN PATTERNS META DATA
export const PATTERNS: Card[] = [
  {
    id: "card-catalog",
    title: "Card catalog",
    description:
      "A catalog of <strong>Cards</strong> with consistent vertical spacing and “show more” pagination.",
    link: "/card-catalog",
    image: "/assets/thumbnails/card-catalog.webp?v=YYYY.MM.DD",
  },
  {
    id: "hero-overlay",
    title: "Hero callout overlay",
    description:
      "A full-width <strong>Hero</strong> callout overlay with semi-transparent background and faded edge.",
    link: "/hero-overlay/#hero",
    image: "/assets/thumbnails/hero-overlay.webp?v=YYYY.MM.DD",
  },
  {
    id: "bubbles",
    title: "Floating bubbles",
    description:
      "A floating collection of bubble-shaped cards without use of the <strong>Grid</strong> layout.",
    link: "/bubbles",
    image: "/assets/thumbnails/bubbles.webp?v=YYYY.MM.DD",
  },
  {
    id: "sticky-menu",
    title: "Sticky process menu",
    description:
      "A matching sticky <strong>Side Navigation</strong> menu for the <strong>Process List</strong>.",
    link: "/sticky-menu",
    image: "/assets/thumbnails/sticky-menu.webp?v=YYYY.MM.DD",
  },
];
