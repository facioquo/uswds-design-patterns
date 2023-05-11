import { Injectable } from '@angular/core';
import { wordList } from "./utility.model";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  // PAGE SCROLLING
  scrollToStart(id: string) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element!.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    }, 200);
  }

  scrollToEnd(id: string) {
    setTimeout(() => {
      const element = document.getElementById(id);
      element!.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'end' });
    }, 200);
  }

  // RANDOM WORD GENERATOR
  // enter minimum and maximum characters of words to generate.
  randomWords(min: number, max: number, suffix:string=""): string {

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
      rightSize = words.length >= randomSize || timeout > 0.75 * wordList.length;
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
    return wordList[this.randInt(wordList.length)];
  }

  // random int
  randInt(lessThan: number): number {
    return Math.floor(Math.random() * lessThan);
  }
}
