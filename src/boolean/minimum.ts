import Greater from "@dikac/t-number/boolean/greater"
import Function from "@dikac/t-function/function"
import Size from "../number/size";

/**
 * check if {@param string} length/size is greater than {@param minimum} or equal if {@param inclusive} is "true"
 *
 * {@param converter} is use to calculate length/size of {@param string}
 */
export default function Minimum(
    string : string,
    minimum : number,
    inclusive : boolean,
    converter : Function<[string], number> = Size
) : boolean {

    return Greater(converter(string), minimum, inclusive)
}
