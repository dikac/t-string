export default function Match(value: string, pattern: RegExp, error?: (value: string, pattern: RegExp) => Error): asserts value is string;
