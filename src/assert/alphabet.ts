import Guard from "../boolean/alphabet";
import Callback from "@dikac/t-function/assert/callback";
import AlphabetError from "./throwable/alphabet";

export default function Alphabet(
    value : string,
    error : (value:string)=>Error = AlphabetError
) : asserts value is string {

    Callback(value, Guard, error);
}
