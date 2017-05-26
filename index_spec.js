import { expect } from 'chai';
import map from './index';

describe('map', () => {
  describe('when no function is passed', () => {
    it('returns the same array', () => {
      expect(map([1,2])).to.eql([1,2]);
    });
  });
});
