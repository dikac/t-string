import Guard from "../boolean/alphanumeric";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import AlphanumericError from "./throwable/alphanumeric";

export default function Alphanumeric(
    value : string,
    error : Function<[string], Error> = AlphanumericError
) : asserts value is string {

    Parameter(value, Guard, error);
}
