import Guard from "../boolean/string";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import StringError from "./throwable/string";

export default function String(
    value : unknown,
    error : Function<[unknown], Error> = StringError
) : asserts value is string {

    Parameter(value, Guard, error);
}
