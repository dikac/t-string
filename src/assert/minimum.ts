import Guard from "../boolean/minimum";
import Callback from "@dikac/t-function/assert/callback";
import MinimumError from "./throwable/minimum";
import Size from "../number/size";

export default function Minimum(
    value : string,
    minimum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Size,
    error : (value:string, minimum:number, inclusive:boolean)=>Error = MinimumError
) : asserts value is string {

    let guard = (value : string, minimum : number, inclusive : boolean) => {
        return Guard(value, minimum, inclusive, converter);
    }

    Callback(value, guard, error, minimum, inclusive);
}
