import Function from "@dikac/t-function/function";
import AssertString from "../assert/string";
import StringError from "../assert/throwable/string";

export default function String(
    value : unknown,
    error : Function<[unknown], Error> = StringError
) : string {

    AssertString(value, error);

    return value;
}
