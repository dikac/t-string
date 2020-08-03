import Guard from "../boolean/minimum";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import MinimumError from "./throwable/minimum";
import Size from "../number/size";

export default function Minimum(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : Function<[string], number> = Size,
    error : Function<[string, number, boolean], Error> = MinimumError
) : asserts value is string {

    let guard = (value : string, minimum : number, inclusive : boolean) => {
        return Guard(value, minimum, inclusive, converter);
    }

    Callback(value, guard, error, minimum, inclusive);
}
