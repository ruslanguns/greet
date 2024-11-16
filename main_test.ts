import { assertEquals } from "@std/assert";
import { greet } from "./main.ts";

Deno.test("First demo test", () => {
  assertEquals(greet("deno"), "Hello, Deno!");
});

Deno.test("Test with an empty string", () => {
  assertEquals(greet(""), "Hello, !");
});
