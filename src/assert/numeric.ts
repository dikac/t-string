import Guard from "../boolean/numeric";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import NumericError from "./throwable/numeric";

export default function Numeric(
    value : string,
    error : Function<[string], Error> = NumericError
) : asserts value is string {

    Callback(value, Guard, error);
}
