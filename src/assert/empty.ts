import Guard from "../boolean/empty";
import Function from "@dikac/t-function/function";
import CallbackArguments from "@dikac/t-function/assert/callback-arguments";
import EmptyError from "./throwable/empty";

export default function Empty(
    value : string,
    empty : boolean = true,
    error : Function<[string], Error> = EmptyError
) : asserts value is string {

    CallbackArguments(value, Guard, error, [empty]);
}
