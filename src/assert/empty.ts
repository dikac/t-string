import Guard from "../boolean/empty";
import Function from "@dikac/t-function/function";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/empty";

export default function Empty(
    value : string,
    error : Function<[string], Error> = EmptyError
) : asserts value is string {

    Callback(value, Guard, error);
}
