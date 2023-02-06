import { AverageData } from '@/types/fetcher.type';

const calculateAverage = (curr: AverageData, prev?: AverageData): number => {
  if (!prev) return NaN;

  const clearNum = (obj: AverageData) => {
    const output = { ...obj };
    output.number = output.isNegative
      ? -Math.abs(output.number)
      : Math.abs(output.number);
    output.number = output.isFractional ? output.number : Math.trunc(output.number);
    return output;
  };

  return (clearNum(curr).number + clearNum(prev).number) / 2;
};

export default calculateAverage;
