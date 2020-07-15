import Guard from "../boolean/minimum";
import Function from "@dikac/t-function/function";
import ParameterArguments from "@dikac/t-function/assert/parameter-arguments";
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

    ParameterArguments(value, guard, error, [minimum, inclusive, converter]);
}
