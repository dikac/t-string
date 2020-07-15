import Guard from "../boolean/maximum";
import Function from "@dikac/t-function/function";
import ParameterArguments from "@dikac/t-function/assert/parameter-arguments";
import MaximumError from "./throwable/maximum";
import Size from "../number/size";

export default function Maximum(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : Function<[string], number> = Size,
    error : Function<[string, number, boolean], Error> = MaximumError
) : asserts value is string {

    let guard = (value : string, maximum : number, inclusive : boolean) => {
        return Guard(value, maximum, inclusive, converter);
    }

    ParameterArguments(value, guard, error, [maximum, inclusive, converter]);
}
