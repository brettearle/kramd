import { assertEquals, assertThrows } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { readMD, ReadMDOpts } from "./main.ts";

describe("readMD", () => {
  it("should be a function", () => {
    assertEquals(typeof readMD, "function");
  });
  it("should throw if no path is provided", () => {
    assertThrows(() => readMD({} as ReadMDOpts));
  });
  it("should require .md in path name", () => {
    assertThrows(() => readMD({ path: "not a path to a md file" }));
  });
  it("should return readable stream", () => {
    const actual = readMD({ path: "./test.md" });
    assertEquals(actual instanceof ReadableStream, true);
  });
});
