import { Injectable } from "@angular/core";

import { WORD_LIST } from "./utility.model";
import { type Card, PATTERNS } from "src/app/pages/patterns.model";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  // DESIGN PATTERN CARD LOOKUP
  getPatternCard(id: string): Card {
    const card = PATTERNS.find((x) => x.id === id);
    return card ?? ({} as Card);
  }

  // PAGE SCROLLING
  scrollToStart(id: string, offset = 200): void {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
      }
    }, offset);
  }

  scrollToEnd(id: string, offset = 200): void {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
      }
    }, offset);
  }

  // RANDOM WORD GENERATOR
  // enter minimum and maximum characters of words to generate.
  randomWords(min: number, max: number, suffix = ""): string {
    let words = "";
    let timeout = 0;
    let rightSize = false;
    let randomSize = 0;

    // adjust for problematic params
    if (min > max) {
      min = max;
    }
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
      const proposed = words.concat(" ").concat(word);

      // add if it fits
      if (proposed.length < max) {
        words = words.concat(" ").concat(word);
        timeout = 0;
      }

      // stop when target met or timeout
      timeout++;
      rightSize = words.length >= randomSize || timeout > 0.75 * WORD_LIST.length;
    }

    // capitalize the first letter of the word set
    words = words.slice(1, 2).toUpperCase().concat(words.slice(2)).concat(suffix);

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
