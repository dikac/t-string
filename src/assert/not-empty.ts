import Guard from "../boolean/not-empty";
import Function from "@dikac/t-function/function-single";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/not-empty";

export default function Empty(
    value : string,
    error : Function<string, Error> = EmptyError
) : asserts value is string {

    Callback(value, Guard, error);
}
