import Lower from "@dikac/t-number/boolean/lower"
import Function from "@dikac/t-function/function"
import Size from "../number/size";

/**
 * check if {@param string} length/size is lower than {@param maximum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function Maximum(
    string : string,
    maximum : number,
    inclusive : boolean,
    converter : Function<[string], number> = Size
) : boolean {

    return Lower(converter(string), maximum, inclusive)
}
