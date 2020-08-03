import Guard from "../boolean/alphabet";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import AlphabetError from "./throwable/alphabet";

export default function Alphabet(
    value : string,
    error : Function<[string], Error> = AlphabetError
) : asserts value is string {

    Callback(value, Guard, error);
}
