import { onlyAlphanumeric } from '.';

describe('onlyAlphanumeric', () => {
  test('should remove all non numeric characters', () => {
    expect(onlyAlphanumeric('abcd')).toBe('abcd');
    expect(onlyAlphanumeric('12345')).toBe('12345');
    expect(onlyAlphanumeric('12345 ')).toBe('12345');
    expect(onlyAlphanumeric(' 12345')).toBe('12345');
    expect(onlyAlphanumeric(' 12345 ')).toBe('12345');
    expect(onlyAlphanumeric('123abc456?.#789xyz 0')).toBe('123abc456789xyz0');
    expect(onlyAlphanumeric(12345)).toBe('12345');
    expect(onlyAlphanumeric(0o12345)).toBe('5349');
    expect(onlyAlphanumeric(0x12345)).toBe('74565');
  });
});
