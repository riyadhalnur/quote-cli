"use strict";

const quote = require("../index");

describe("Quote CLI", () => {
  test("should get a random quote", async () => {
    const res = await quote();
    expect(res).toBeInstanceOf(Object);
    expect(res.quote.body.length).toBeGreaterThan(2);
    expect(res.quote.author.length).toBeGreaterThan(2);
  });

  test("should get the quote of the day", async () => {
    const res = await quote("qotd");
    expect(res).toBeInstanceOf(Object);
    expect(res.quote.body.length).toBeGreaterThan(2);
    expect(res.quote.author.length).toBeGreaterThan(2);
  });
});
