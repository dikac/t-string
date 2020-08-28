import Guard from "../boolean/alphanumeric";
import Callback from "@dikac/t-function/assert/callback";
import AlphanumericError from "./throwable/alphanumeric";

export default function Alphanumeric(
    value : string,
    error : (value:string)=>Error = AlphanumericError
) : asserts value is string {

    Callback(value, Guard, error);
}
