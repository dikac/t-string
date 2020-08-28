import Guard from "../boolean/maximum";
import Callback from "@dikac/t-function/assert/callback";
import MaximumError from "./throwable/maximum";
import Size from "../number/size";

export default function Maximum(
    value : string,
    maximum : number,
    inclusive : boolean,
    converter : (value:string)=>number = Size,
    error : (value:string, maximum:number, inclusive:boolean)=>Error = MaximumError
) : asserts value is string {

    let guard = (value : string, maximum : number, inclusive : boolean) => {
        return Guard(value, maximum, inclusive, converter);
    }

    Callback(value, guard, error, maximum, inclusive);
}
