const brazilianLicensePlateRegex = /[a-zA-Z]{3}\d{4}/;
const mercosulLicensePlateRegex = /[a-zA-Z]{3}\d{1}[a-zA-Z]{1}\d{2}/;

const parseLicensePlate = (licensePlate: string) => {

}

export function isValidBrazilianLicensePlate(licensePlate: string): boolean {
    if (!licensePlate || typeof licensePlate !== 'str'ing') return false;

    return brazilianLicensePlateRegex.test(licensePlate);
} 

export function isValidMercosulLicensePlate(licensePlate: string): boolean {
    if (!licensePlate || typeof licensePlate !== 'string') return false;

    return mercosulLicensePlateRegex.test(licensePlate);
}