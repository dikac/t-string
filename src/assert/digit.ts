import Guard from "../boolean/digit";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import DigitError from "./throwable/digit";

export default function Digit(
    value : string,
    error : Function<[string], Error> = DigitError
) : asserts value is string {

    Parameter(value, Guard, error);
}
