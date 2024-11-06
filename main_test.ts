import { assertEquals, assertRejects } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { readMD, ReadMDOpts } from "./main.ts";

describe("readMD", () => {
  it("should be a function", () => {
    assertEquals(typeof readMD, "function");
  });
  it("should throw if no path is provided", () => {
    assertRejects(async () => await readMD({} as ReadMDOpts));
  });
  it("should require .md in path name", () => {
    assertRejects(
      async () => await readMD({ path: "not a path to a md file" }),
    );
  });
  it("should return readable stream", async () => {
    const testMD = await Deno.open("./test.md", { create: true, write: true });
    testMD.close();

    const actual = await readMD({ path: "./test.md" });
    assertEquals(actual.fileStream instanceof ReadableStream, true);

    actual.close();
    await Deno.remove("./test.md");
  });
});
