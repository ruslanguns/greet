import { titleCase } from "jsr:@luca/cases";
/**
 * A module providing a function to greet people.
 * @module
 */

/**
 * Greet a person.
 *
 * @param name The name of the person to greet.
 */
export function greet(name: string) {
  return `Hello, ${titleCase(name)}!`;
}
