import { isValidBrazilianLicensePlate, isValidMercosulLicensePlate } from '.';

describe('isValid', () => {
  describe('should return false', () => {
    test('when license plate is null', () => {
      expect(isValidBrazilianLicensePlate(null as any)).toBe(false);
      expect(isValidMercosulLicensePlate(null as any)).toBe(false);
    });

    test('when license plate is undefined', () => {
      expect(isValidBrazilianLicensePlate(undefined as any)).toBe(false);
      expect(isValidMercosulLicensePlate(undefined as any)).toBe(false);
    });

    test('when license plate is an empty string', () => {
      expect(isValidBrazilianLicensePlate('')).toBe(false);
      expect(isValidMercosulLicensePlate('')).toBe(false);
    });

    test('when license plate is an array', () => {
      expect(isValidBrazilianLicensePlate([] as any)).toBe(false);
      expect(isValidMercosulLicensePlate([] as any)).toBe(false);
    });

    test('when license plate is an object', () => {
      expect(isValidBrazilianLicensePlate({} as any)).toBe(false);
      expect(isValidMercosulLicensePlate({} as any)).toBe(false);
    });

    test('when license plate is a boolean', () => {
      expect(isValidBrazilianLicensePlate(false as any)).toBe(false);
      expect(isValidMercosulLicensePlate(false as any)).toBe(false);
      expect(isValidBrazilianLicensePlate(true as any)).toBe(false);
      expect(isValidMercosulLicensePlate(true as any)).toBe(false);
    });

    test('when license plate lenght is smaller than 7', () => {
      expect(isValidBrazilianLicensePlate('123AB')).toBe(false);
      expect(isValidMercosulLicensePlate('123ABC')).toBe(false);
    });

    test('when license plate lenght is bigger than 7', () => {
      expect(isValidBrazilianLicensePlate('123ABCDE')).toBe(false);
      expect(isValidMercosulLicensePlate('1234ABCD')).toBe(false);
    });

    test('when license plate is only numbers', () => {
      expect(isValidBrazilianLicensePlate('1234567')).toBe(false);
      expect(isValidMercosulLicensePlate('1234567')).toBe(false);
    });

    test('when license plate is only letters', () => {
      expect(isValidBrazilianLicensePlate('ABCDEFG')).toBe(false);
      expect(isValidMercosulLicensePlate('ABCDEFG')).toBe(false);
    });

    test('when brazilian license plate is invalid', () => {
      expect(isValidBrazilianLicensePlate('123ABCD')).toBe(false);
      expect(isValidBrazilianLicensePlate('AB118CD')).toBe(false);
      expect(isValidBrazilianLicensePlate('ABC1D23')).toBe(false);
    });

    test('when mercosul license plate is invalid', () => {
      expect(isValidMercosulLicensePlate('ABC1234')).toBe(false);
      expect(isValidMercosulLicensePlate('123A1BN')).toBe(false);
      expect(isValidMercosulLicensePlate('J39I981')).toBe(false);
    });
  });
});
