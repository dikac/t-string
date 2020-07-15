import Guard from "../boolean/digit";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import DigitError from "./throwable/digit";

export default function Digit(
    value : string,
    error : Function<[string], Error> = DigitError
) : asserts value is string {

    Callback(value, Guard, error);
}
