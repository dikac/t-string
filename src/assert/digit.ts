import Guard from "../boolean/digit";
import Callback from "@dikac/t-function/assert/callback";
import DigitError from "./throwable/digit";

export default function Digit(
    value : string,
    error : (value:string)=> Error = DigitError
) : asserts value is string {

    Callback(value, Guard, error);
}
