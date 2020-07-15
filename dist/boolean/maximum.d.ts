import Function from "@dikac/t-function/function";
/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function Maximum(string: string, maximum: number, inclusive: boolean, converter?: Function<[string], number>): boolean;
