/* eslint-env max-nested-callbacks: ["error", 5] */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const quote = require('../index');

chai.use(chaiAsPromised);
chai.should();

describe('Quote CLI', () => {
  it('should get a random quote', () => {
    return quote().should.be.fulfilled.then(res => {
      res.should.be.an.instanceOf(Object);
      res.quote.body.should.have.lengthOf.above(2);
      res.quote.author.should.have.lengthOf.above(2);
    });
  });

  it('should get the quote of the day', () => {
    return quote('qotd').then(res => {
      res.should.be.an.instanceOf(Object);
      res.quote.body.should.have.lengthOf.above(2);
      res.quote.author.should.have.lengthOf.above(2);
    });
  });
});
