import Function from "@dikac/t-function/function";
export default function Empty(value: string, empty?: boolean, error?: Function<[string], Error>): asserts value is string;
