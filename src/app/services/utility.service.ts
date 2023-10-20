import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';

import { WORD_LIST } from "./utility.model";
import { Card, PATTERNS } from 'src/app/pages/patterns.model';

const URL_BASE = "https://uswds.facioquo.com";
const URL_IMAGE_SOCIAL = URL_BASE.concat("/assets/images/social-card.png?v=2023.10.18");
const SITE_TITLE = "Idea book: design patterns for U.S. Web Design System sites";
const SITE_DESCRIPTION = "A design pattern idea book for designers and developers using the U.S. Web Design System (USWDS), built by community enthusiasts.";
const VERSION_DATE = "2023.10.18";

export {
  URL_BASE,
  URL_IMAGE_SOCIAL,
  SITE_TITLE,
  SITE_DESCRIPTION,
  VERSION_DATE
}

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private meta: Meta,
    private t: Title
  ) { }

  // DESIGN PATTERN META
  publishMetaTags(tags: MetaDefinition[]): void {

    const title = this.t.getTitle();

    console.log("NEW PAGE LOAD", title);

    tags.forEach((tag: MetaDefinition) => {

      if (tag.name == "og:title" && tag.content) {
        this.t.setTitle(tag.content);
      }

      // get tag
      const attrib =
        tag.id !== undefined
          ? `id='${tag.id}'`
          : tag.property !== undefined
            ? `property='${tag.property}'`
            : tag.name !== undefined
              ? `name='${tag.name}'`
              : "UNDEFINED";

      console.log("ATTRIB", attrib, tag);
      const existing = this.meta.getTag(attrib);
      console.log("EXISTS", existing);

      // update
      if (existing !== null) {
        const tagout = this.meta.updateTag(tag, attrib)
        console.log("UPDATE", tagout);
      }

      // add
      else {
        const tagout = this.meta.addTag(tag)
        console.log("ADD", tagout);
      }
    });
  }

  updateMetaTags(id: string): void {

    const tags = this.patternMetaTags(id);
    this.publishMetaTags(tags);
  }

  // DESIGN PATTERN META
  patternMetaTags(id: string): MetaDefinition[] {

    const card = this.getPatternCard(id);

    const metaImage = card.imageMeta
      ? URL_BASE.concat(card.imageMeta)
      : URL_IMAGE_SOCIAL;

    // const title = pageTitleWithSuffix(card.title);
    const title = card.title;

    const tags: MetaDefinition[] = [
      {
        // id: "nm-img",
        name: 'image',
        content: metaImage
      },
      {
        // id: "nm-dsc",
        name: 'description',
        content: card.description
      },
      {
        // id: "og-ttl",
        property: 'og:title',
        content: title
      },
      {
        // id: "og-dsc",
        property: 'og:description',
        content: card.description
      },
      {
        // id: "og-img",
        property: 'og:image',
        content: metaImage
      },
    ];

    return tags;
  }

  // DESIGN PATTERN CARD LOOKUP
  getPatternCard(id: string): Card {
    const card = PATTERNS.find(x => x.id === id);
    return card
      ? card
      : {} as Card
  }


  // PAGE SCROLLING
  scrollToStart(id: string, offset: number = 200) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }, offset);
  }

  scrollToEnd(id: string, offset: number = 200) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element!.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    }, offset);
  }


  // RANDOM WORD GENERATOR
  // enter minimum and maximum characters of words to generate.
  randomWords(min: number, max: number, suffix: string = ""): string {

    let words: string = "";
    let timeout: number = 0;
    let rightSize: boolean = false;
    let randomSize: number = 0;

    // adjust for problematic params
    if (min > max) min = max;
    min = Math.min(min, max - 20);
    min = Math.max(min, 5);
    max = Math.max(min + 20, max);

    // get a random size target within range
    while (!rightSize) {
      randomSize = this.randInt(max - 10);
      rightSize = randomSize >= min && randomSize <= max - 10;
    }

    // build word string
    rightSize = false;
    while (!rightSize) {

      // add a word
      const word = this.randomWord();
      const proposed = words
        .concat(" ")
        .concat(word);

      // add if it fits
      if (proposed.length < max) {
        words = words
          .concat(" ")
          .concat(word);
        timeout = 0;
      }

      // stop when target met or timeout
      timeout++;
      rightSize = words.length >= randomSize || timeout > 0.75 * WORD_LIST.length;
    }

    // capitalize the first letter of the word set
    words = words
      .slice(1, 2)
      .toUpperCase()
      .concat(words.slice(2))
      .concat(suffix);

    return words;
  }

  // random word
  randomWord(): string {
    return WORD_LIST[this.randInt(WORD_LIST.length)];
  }

  // random int
  randInt(lessThan: number): number {
    return Math.floor(Math.random() * lessThan);
  }

}

export function pageTitleWithSuffix(title: string): string {
  return title.concat(" | Design pattern for USWDS");
}

export function patternTitleWithSuffix(id: string): string {
  const card = PATTERNS.find(x => x.id === id);
  if (card === undefined) return "Unknown pattern ID";
  return pageTitleWithSuffix(card.title);
}
