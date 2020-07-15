import Function from "@dikac/t-function/function";
export default function Match(value: string, pattern: RegExp, error?: Function<[string, RegExp], Error>): asserts value is string;
