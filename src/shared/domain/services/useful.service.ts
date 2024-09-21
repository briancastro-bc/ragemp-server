export interface UsefulService {
  randomNumber(
    min: number, 
  ): number;
  randomNumberBetween(
    min: number,
    max: number,
  ): number;
  hasDatePassed(
    from: string | number | Date, 
    to: string | number | Date
  ): boolean;
}