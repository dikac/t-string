import Guard from "../boolean/numeric";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import NumericError from "./throwable/numeric";

export default function Numeric(
    value : string,
    error : Function<[string], Error> = NumericError
) : asserts value is string {

    Parameter(value, Guard, error);
}
