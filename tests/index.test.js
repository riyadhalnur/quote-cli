/* eslint-env max-nested-callbacks: ["error", 5] */
'use strict';

const quote = require('../index');

describe('Quote CLI', () => {
  test('should get a random quote', async () => {
    const res = await quote();
    expect(res).to.be.instanceOf(Object);
    expect(res.quote.body).lengthOf.above(2);
    expect(res.quote.author).lengthOf.above(2);
  });

  test('should get the quote of the day', async () => {
    const res = await quote('qotd');
    expect(res).to.be.instanceOf(Object);
    expect(res.quote.body).lengthOf.above(2);
    expect(res.quote.author).lengthOf.above(2);
  });
});
