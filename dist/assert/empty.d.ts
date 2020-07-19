import Function from "@dikac/t-function/function";
export default function Empty(value: string, empty?: boolean, error?: Function<[boolean, string], Error>): asserts value is string;
