import { describe, it } from "@std/testing/bdd";
import { assertEquals } from "@std/assert/equals";
import { mdParser } from "./index.ts";

describe("mdParser", () => {
  it("should take in a readable stream and return out a readable stream", async () => {
    const stream = await Deno.open("./test.md", {
      create: true,
      write: true,
      read: true,
    });
    const got = await mdParser(stream.readable);
    assertEquals(got instanceof ReadableStream, true);
    await got.cancel();
    await Deno.remove("./test.md");
  });

  it("should read a md with #Hello and return {token: '#Hello', fmt: 'heading 1'}", ()=>{

  })
});
