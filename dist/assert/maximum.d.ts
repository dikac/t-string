export default function Maximum(value: string, maximum: number, inclusive: boolean, converter?: (value: string) => number, error?: (value: string, maximum: number, inclusive: boolean) => Error): asserts value is string;
