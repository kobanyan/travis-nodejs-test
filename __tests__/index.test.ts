import { even } from '../src/index';

describe('index', () => {
  describe('even', () => {
    it('should return true', () => {
      expect(even(4)).toBe(true);
    });
    it('should return false', () => {
      expect(even(3)).toBe(false);
    });
  });
});
