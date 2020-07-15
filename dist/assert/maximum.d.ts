import Function from "@dikac/t-function/function";
export default function Maximum(value: string, maximum: number, inclusive: boolean, converter?: Function<[string], number>, error?: Function<[string, number, boolean], Error>): asserts value is string;
