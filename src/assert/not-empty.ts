import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/not-empty";

export default function Empty(
    value : string,
    error : (value:string)=>Error = EmptyError
) : asserts value is string {

    Callback(value, Guard, error);
}
