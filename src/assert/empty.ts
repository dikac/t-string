import Guard from "../boolean/empty";
import Function from "@dikac/t-function/function";
import ParameterArguments from "@dikac/t-function/assert/parameter-arguments";
import EmptyError from "./throwable/empty";

export default function Empty(
    value : string,
    empty : boolean = true,
    error : Function<[string], Error> = EmptyError
) : asserts value is string {

    ParameterArguments(value, Guard, error, [empty]);
}
