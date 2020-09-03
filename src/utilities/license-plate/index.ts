import { onlyAlphanumeric } from 'helpers';

const LICENSE_PLATE_LENGTH = 7;
const brazilianLicensePlateRegex = /[a-zA-Z]{3}\d{4}/;
const mercosulLicensePlateRegex = /[a-zA-Z]{3}\d{1}[a-zA-Z]{1}\d{2}/;

const parseLicensePlate = (licensePlate: string) => onlyAlphanumeric(licensePlate);

const isValidLicensePlateLength = (licensePlate: string) => licensePlate.length === LICENSE_PLATE_LENGTH;

export function isValidBrazilianLicensePlate(licensePlate: string): boolean {
  if (!licensePlate || typeof licensePlate !== 'string') return false;

  const parsedLicensePlate = parseLicensePlate(licensePlate);

  return (
    isValidLicensePlateLength(parsedLicensePlate) &&
    brazilianLicensePlateRegex.test(parseLicensePlate(parsedLicensePlate))
  );
}

export function isValidMercosulLicensePlate(licensePlate: string): boolean {
  if (!licensePlate || typeof licensePlate !== 'string') return false;

  const parsedLicensePlate = parseLicensePlate(licensePlate);

  return (
    isValidLicensePlateLength(parsedLicensePlate) &&
    mercosulLicensePlateRegex.test(parseLicensePlate(parsedLicensePlate))
  );
}
