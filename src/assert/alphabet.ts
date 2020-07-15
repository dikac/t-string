import Guard from "../boolean/alphabet";
import Function from "@dikac/t-function/function";
import Parameter from "@dikac/t-function/assert/parameter";
import AlphabetError from "./throwable/alphabet";

export default function Alphabet(
    value : string,
    error : Function<[string], Error> = AlphabetError
) : asserts value is string {

    Parameter(value, Guard, error);
}
